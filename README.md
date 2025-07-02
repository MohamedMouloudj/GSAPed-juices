Based on your React/TypeScript project with GSAP animations, here's a comprehensive README file:

```markdown
# GSAPed-juices

A fully animated React application built with GSAP, showcasing a vibrant and interactive juice exhibition.
Designed to captivate users with smooth motion and refreshing visuals.

## Features

- 🎨 Modern, responsive design
- ⚡ Smooth GSAP animations with ScrollTrigger
- 📱 Mobile-friendly layout
- 🎥 Optimized video playback
- 🔗 Social media integration
- 🎯 SEO-friendly structure

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Animations**: GSAP (GreenSock Animation Platform)
- **Icons**: Font Awesome, Lucide React
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features, Tailwinfd CSS for utility-first styling

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd GSAPed-juices
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
├── public/
├── src/
│   ├── app/
│   ├── components/
│   └── ...
├── constants/
└── ...
```

## Video Optimization

Videos are optimized using FFmpeg for web playback:

```bash
ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4
```

This command:
- Scales video to 960px width
- Enables fast web streaming
- Uses H.264 codec for browser compatibility
- Sets every frame as keyframe for smooth scrubbing

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contact

📧 mouloudj.mohamed.04@gmail.com

## License

This project is licensed under the MIT License.
```