const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'src/app/page.js', video: '/videos/introVideo.mp4' },
  { file: 'src/app/iphone-page/page.js', video: '/iPhone-page/iphone-video/iphone.mp4' },
  { file: 'src/app/ipad-page/page.js', video: '/iPad-page/iPad-video/ipad.mp4' },
  { file: 'src/app/mac-page/page.js', video: '/mac-page/mac-video/mac.mp4' },
  { file: 'src/app/watch-page/page.js', video: '/watch-page/watch-video/watch.mp4' },
  { file: 'src/app/airpods-page/page.js', video: '/airpods-page/airpods-video/Airpods.mp4' }
];

pages.forEach(p => {
  const filePath = path.join(__dirname, p.file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // If it already has intro-video-area, skip
  if (content.includes('intro-video-area')) {
    console.log(`Already has video: ${p.file}`);
    return;
  }
  
  const videoBlock = `
      <div className="intro-video-area">
        <video className="intro-video" autoPlay muted loop>
          <source src="${p.video}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
`;

  // Insert right before <main>
  if (content.includes('<main>')) {
    content = content.replace('<main>', videoBlock + '      <main>');
  } else if (content.includes('<main className')) {
    content = content.replace(/<main className=/, videoBlock + '      <main className=');
  } else if (content.includes('return (')) {
     // If no <main>, just put it after return ( <> or return ( <div> 
     // This is a fallback, but my converted pages all have <main>
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Added video to ${p.file}`);
});
