printResolutionOriginal=150
printResolutionFixed=1200

LC_CTYPE=C find ./node_modules/ng2-pdfjs-viewer/pdfjs/web/ -name 'viewer.js' -exec sed -i'.original' -e 's/'"$printResolutionOriginal"'/'"$printResolutionFixed"'/g' {} \;

find ./node_modules/ng2-pdfjs-viewer/pdfjs/web/ -name 'viewer.js.original' -exec rm -rf {} \;
