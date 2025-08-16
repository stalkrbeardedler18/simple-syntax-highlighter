document.querySelectorAll('pre[class^="code-"]').forEach(block => {
    const language = block.className.split('-')[1];
    const code = block.innerText;
    block.innerHTML = highlightSyntax(code, language);
});

function highlightSyntax(code, language) {
    switch (language) {
        case 'js':
            return code.replace(/(\w+)(\s*\()/g, '<span class="keyword">$1</span>$2');
        case 'python':
            return code.replace(/def\s+(\w+)(\s*\()/g, 'def <span class="keyword">$1</span>$2');
        case 'html':
            return code.replace(/(&lt;\w+)(.*?)(&gt;)/g, '$1<span class="tag">$2</span>$3');
        default:
            return code;
    }
}