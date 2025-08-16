document.querySelectorAll('pre[class^="code-"]').forEach(block => {
    // Extract the programming language from class name
    const language = block.className.split('-')[1];
    // Get the actual code from the block
    const code = block.innerText;
    // Highlight the syntax in the code according to the language
    block.innerHTML = highlightSyntax(code, language);
});

function highlightSyntax(code, language) {
    switch (language) {
        case 'js':
            // Highlight JavaScript keywords
            return code.replace(/(\w+)(\s*\()/g, '<span class="keyword">$1</span>$2');
        case 'python':
            // Highlight Python function definitions
            return code.replace(/def\s+(\w+)(\s*\()/g, 'def <span class="keyword">$1</span>$2');
        case 'html':
            // Highlight HTML tags
            return code.replace(/(&lt;\w+)(.*?)(&gt;)/g, '$1<span class="tag">$2</span>$3');
        default:
            // Return the code unchanged if the language is not recognized
            return code;
    }
}