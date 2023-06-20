const useTextDownloader = () => {
    const downloadText = (content: any) => {
        const file = new Blob([content], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = 'transcribe.txt';
        link.click();
        link.remove();
        URL.revokeObjectURL(link.href);
    };
    return downloadText;
  };
  
  export default useTextDownloader;