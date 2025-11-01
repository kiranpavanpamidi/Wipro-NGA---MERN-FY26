Folders:
- userstory1/    => HTML/CSS homepage (Bootstrap)
- userstory2/    => Dashboard (JS + mock events.json). Use a static server to run.
- userstory3/    => TypeScript module + compiled JS (CustomerModule.js)
- screenshots/   => screenshots added in the file for reference.

How to run locally:
1) User Story 1:
   - Open userstory1/index.html in a browser (recommended: via local server but file open is fine).

2) User Story 2:
   - Open userstory2/index.html in a browser (recommended: via local server but file open is fine).

3) User Story 3:
   - TypeScript source: userstory3/CustomerModule.ts
   - Compiled JS: userstory3/CustomerModule.js (included)
   - To compile yourself:
     * npm install -g typescript (if not installed)
     * tsc --version
     * tsc userstory3/CustomerModule.ts --target ES2015 --module ES2015 --outDir userstory3
   - Or create tsconfig.json and run `tsc`.