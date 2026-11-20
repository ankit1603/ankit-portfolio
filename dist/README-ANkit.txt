ANKIT SHARMA PORTFOLIO — SETUP

1) Install Node.js LTS if not already installed: https://nodejs.org/
2) Extract this ZIP.
3) Open the extracted folder in VS Code.
4) Open Terminal and run:
   npm install
   npm run dev
5) Open the local URL shown by Vite (usually http://localhost:5173).

BEFORE PUBLISHING:
- Your uploaded profile photo is already added as public/ankit-profile.jpg.
- Your uploaded resume is already added as public/Ankit_Sharma_Resume.pdf.
- Your LinkedIn profile URL has been added.
- Verify all employment dates, company names, project descriptions and responsibilities.
- Add only projects you are allowed to show publicly. Do not publish employer/client confidential information.
- Add real project screenshots, GitHub repositories or demo links only where available.
- The AI CRM Assistant is marked as a planned portfolio project; keep it marked in progress until built.

GITHUB:
Create a repository named ankit-portfolio at https://github.com/new
Then:
  git init
  git add .
  git commit -m "Create personal portfolio"
  git branch -M main
  git remote add origin https://github.com/ankit1603/ankit-portfolio.git
  git push -u origin main

VERCEL:
1) Sign in at https://vercel.com/ using GitHub.
2) Add New > Project.
3) Import ankit-portfolio.
4) Framework: Vite (auto-detected), Build command: npm run build, Output directory: dist.
5) Click Deploy. Free plan is enough for a static portfolio.
