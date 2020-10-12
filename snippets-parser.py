'''
Convert `snippets.json` into markdown file
'''
import json

with open('snippets.json') as f:
    snippets = json.load(f)

with open('website/docs/vs-code-snippets/snippets.md', 'a') as f:

    for name, snippet in snippets.items():

        f.write('### '+name+'\n')
        f.write(snippet.get('description'))
        f.write('\n')
        f.write('\n')
        # f.write(f"**Prefix:** {' '.join(snippet.get('prefix'))}")
        f.write(f"**Prefix:** {snippet.get('prefix')}")
        
        body = snippet['body']
        f.write('\n')
        f.write('```'+'\n')
        for line in body:
            f.write(line + '\n')
        f.write('```'+'\n')

        f.write('\n')