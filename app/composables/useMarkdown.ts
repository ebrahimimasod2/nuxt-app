export const useMarkdown = () => {
  const renderMarkdown = (markdown: string): string => {
    if (!markdown) return ''
    
    let html = markdown
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold text-navy-900 mt-4 mb-2">$1</h3>')
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold text-navy-900 mt-4 mb-2">$1</h2>')
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold text-navy-900 mt-4 mb-2">$1</h1>')
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
    html = html.replace(/__(.*?)__/g, '<strong class="font-bold">$1</strong>')
    
    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    html = html.replace(/_(.*?)_/g, '<em class="italic">$1</em>')
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" class="text-amber-600 hover:text-amber-700 underline">$1</a>')
    
    // Code blocks
    html = html.replace(/```([^`]+)```/g, '<pre class="bg-gray-100 rounded-lg p-3 my-2 overflow-x-auto"><code class="text-sm">$1</code></pre>')
    
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    
    // Unordered lists
    html = html.replace(/^\* (.*$)/gim, '<li class="ml-4 mb-1">• $1</li>')
    html = html.replace(/^- (.*$)/gim, '<li class="ml-4 mb-1">• $1</li>')
    
    // Ordered lists
    html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-4 mb-1 list-decimal">$1</li>')
    
    // Wrap lists
    html = html.replace(/(<li class="ml-4 mb-1">.*<\/li>)/s, '<ul class="my-2">$1</ul>')
    
    // Line breaks
    html = html.replace(/\n\n/g, '<br/><br/>')
    html = html.replace(/\n/g, '<br/>')
    
    return html
  }
  
  return {
    renderMarkdown
  }
}
