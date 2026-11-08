import json,html,shutil,os,sys
sys.path.insert(0,'.')
from leads2 import L
T=open('/mnt/project-files/website/mockups/_template.html').read()
GA='https://apps.apple.com/gb/app/gaffer-small-sided-football/id6821197842'
out={}
for d in L:
    s=d['slug'];dst=f'/mnt/project-files/website/mockups/{s}';os.makedirs(dst,exist_ok=True)
    src=f'/home/claude/work/mock/out/{s}'
    shutil.copy(f'{src}/app-concept.mp4',dst);shutil.copy(f'{src}/poster.png',dst)
    e=html.escape
    page=T.replace('{{BUSINESS}}',e(d['name'])).replace('{{HEADLINE}}',e(d['headline'])).replace('{{BLURB}}',e(d['blurb'])).replace('{{FEATURES}}','\n'.join(f'      <li>{e(f)}</li>' for f in d['features']))
    open(f'{dst}/index.html','w').write(page)
    url=f'https://apps.reth.com/mockups/{s}/'
    n=d['name']; greet=f"Hi {n.replace('The ','',1) if n.startswith('The ') else n} team,"
    why_t='\n'.join('- '+w for w in d['why'])
    body=f"""{greet}

I'm Ethan from High Street Apps. I build iPhone apps for independent UK businesses. {d['hook']}

You can watch the 20-second concept here: {url}

Why an app could work for {n}:
{why_t}

I built and run Gaffer, a football team app that's live on the App Store for iPhone and Apple Watch ({GA}). It handles availability, fair subs, live scoring and highlight clips, and a real team uses it every week. I'd build yours the same way: a fast, native app that works with the systems you already have.

I'd love to hear what you think of it. If you'd like to take it further, just reply and I'll send over the next steps.

Best,
Ethan
High Street Apps · https://apps.reth.com

If this isn't relevant, just reply "no thanks" and I won't contact you again."""
    li=''.join(f'<li style="margin-bottom:6px">{e(w)}</li>' for w in d['why'])
    hb=f'''<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.55;color:#222;max-width:560px">
<p>{e(greet)}</p>
<p>I'm Ethan from High Street Apps. I build iPhone apps for independent UK businesses. {e(d['hook'])}</p>
<p><b><a href="{url}">Watch the 20-second concept for {e(n)}</a></b></p>
<p><b>Why an app could work for {e(n)}:</b></p><ul style="padding-left:18px">{li}</ul>
<p>I built and run <b>Gaffer</b>, a football team app that's <a href="{GA}">live on the App Store</a> for iPhone and Apple Watch. It handles availability, fair subs, live scoring and highlight clips, and a real team uses it every week. I'd build yours the same way: a fast, native app that works with the systems you already have.</p>
<p>I'd love to hear what you think of it. If you'd like to take it further, just reply and I'll send over the next steps.</p>
<p>Best,<br>Ethan<br>High Street Apps · <a href="https://apps.reth.com">apps.reth.com</a></p>
<p style="font-size:12px;color:#888">If this isn't relevant, just reply "no thanks" and I won't contact you again.</p>
</div>'''
    out[s]=dict(to=[d['to']],subject=f"An app idea for {n}",body=body,htmlBody=hb)
json.dump(out,open('drafts2.json','w'),ensure_ascii=False,indent=1)
