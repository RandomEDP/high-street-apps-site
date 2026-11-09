"""v2 generator. Run from a work dir that holds leads.py and out/<slug>/{app-concept.mp4,poster.png}:
    python3 /home/claude/high-street-apps-site/tools/v2/gen.py
Writes site/mockups/<slug>/ in the repo and drafts.json (to, subject, body, htmlBody per slug) in the work dir."""
import json,html,shutil,os,sys,urllib.parse
sys.path.insert(0,os.getcwd())
from leads import L
HERE=os.path.dirname(os.path.abspath(__file__)); REPO=os.path.dirname(os.path.dirname(HERE))
T=open(os.path.join(HERE,'mockup-page-template.html')).read()
GA='https://apps.apple.com/gb/app/gaffer-small-sided-football/id6821197842'
# Website lines: only for dated_site=True (approved by Ethan 2026-11-09). Never criticise their site.
WEB=("I also design and build websites, so if you'd like your site refreshed to match the app, I can do both together as one project. "
     "That way bookings, accounts and offers work the same on the web as they do on the phone.")
e=html.escape; out={}
for d in L:
    for k in ('slug','name','to','short','subject','opener','ask_noun','headline','blurb','features'):
        assert d.get(k), f"{d.get('slug')}: missing {k}"
    assert 'app idea' not in d['subject'].lower() and len(d['subject'])<=60, f"{d['slug']}: subject"
    s=d['slug']; n=d['name']; dst=os.path.join(REPO,'site','mockups',s); os.makedirs(dst,exist_ok=True)
    for f in ('app-concept.mp4','poster.png'): shutil.copy(os.path.join('out',s,f),dst)
    page=(T.replace('{{BUSINESS}}',e(n)).replace('{{HEADLINE}}',e(d['headline'])).replace('{{BLURB}}',e(d['blurb']))
           .replace('{{FEATURES}}','\n'.join(f'      <li>{e(f)}</li>' for f in d['features']))
           .replace('{{SUBJ}}',urllib.parse.quote('Re: App concept for '+n,safe='')))
    assert '{{' not in page
    open(os.path.join(dst,'index.html'),'w').write(page)
    url=f'https://apps.reth.com/mockups/{s}/'
    greet=f"Hi {d['short']} team," if not d.get('first_name') else f"Hi {d['first_name']},"
    web=WEB if d.get('dated_site') else ''
    ask=f"Is this something {d['ask_noun']} would find useful, or is it not a priority right now? A one-line reply either way would really help me."
    body='\n\n'.join(x for x in [greet,d['opener'],f"Watch the 20-second mockup: {url}",
        f"I'm Ethan, and I build iPhone apps for independent UK businesses. My own app, Gaffer, is live on the App Store ({GA}) if you'd like to see finished work.",
        web,ask,"Ethan\nHigh Street Apps · https://apps.reth.com",
        'If this isn\'t relevant, just reply "no thanks" and I won\'t contact you again.'] if x)
    hb=f'''<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.55;color:#222;max-width:560px">
<p>{e(greet)}</p>
<p>{e(d['opener'])}</p>
<p><b><a href="{url}">Watch the 20-second mockup</a></b></p>
<p>I'm Ethan, and I build iPhone apps for independent UK businesses. My own app, Gaffer, is <a href="{GA}">live on the App Store</a> if you'd like to see finished work.</p>{f"""
<p>{e(web)}</p>""" if web else ''}
<p>{e(ask)}</p>
<p>Ethan<br>High Street Apps · <a href="https://apps.reth.com">apps.reth.com</a></p>
<p style="font-size:12px;color:#888">If this isn't relevant, just reply "no thanks" and I won't contact you again.</p>
</div>'''
    out[s]=dict(to=[d['to']],subject=d['subject'],body=body,htmlBody=hb,words=len(body.split()))
json.dump(out,open('drafts.json','w'),ensure_ascii=False,indent=1)
print('wrote',len(out),'pages and drafts;','max words',max(v['words'] for v in out.values()))
