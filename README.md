<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Wish | Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
    body { background: #0a0a0a; color: #fff; line-height: 1.6; padding: 20px; }
    header { text-align: center; padding: 50px 20px; background: linear-gradient(145deg, #1c1c1c, #2b2b2b); border-radius: 16px; animation: fadeIn 1.2s ease-out; }
    header h1 { font-size: 2.8rem; margin-bottom: 10px; color: #c084fc; }
    header p { font-size: 1.2rem; color: #ccc; }

    section { max-width: 900px; margin: 60px auto; padding: 20px; animation: fadeInUp 1s ease-out; }
    h2 { font-size: 2rem; margin-bottom: 20px; border-bottom: 2px solid #c084fc; padding-bottom: 10px; color: #c084fc; }

    ul { list-style: none; padding-left: 0; }
    li { margin-bottom: 10px; position: relative; padding-left: 24px; }
    li::before { content: '•'; position: absolute; left: 0; color: #c084fc; }

    .portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
    .card { background: #1a1a1a; padding: 15px; border-radius: 12px; box-shadow: 0 0 15px rgba(192, 132, 252, 0.3); transition: transform 0.3s ease; }
    .card:hover { transform: translateY(-5px); }
    .card img { width: 100%; border-radius: 8px; }
    .card h3 { margin-top: 10px; color: #fff; }

    a { color: #c084fc; text-decoration: none; }
    a:hover { text-decoration: underline; }

    footer { text-align: center; margin: 80px 0 20px; color: #777; font-size: 0.9rem; }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <header>
    <h1>Wish</h1>
    <p>3D Modeling • Game Assets • Freelancing • Animation • Teaching</p>
  </header>

  <section>
    <h2>About Me</h2>
    <p>I'm Wish, a versatile creator with years of experience in 3D modeling, game asset development, animation, and teaching. I work with tools like Blender, Roblox Studio, and more to bring ideas to life and help others learn.</p>
  </section>

  <section>
    <h2>Skills</h2>
    <ul>
      <li>🧊 3D Modeling & Game Asset Creation</li>
      <li>🎥 Animation for Games</li>
      <li>💼 Freelancing & Asset Selling</li>
      <li>🎓 Teaching / Explaining Complex Topics</li>
    </ul>
  </section>

  <section>
    <h2>Portfolio</h2>
    <div class="portfolio-grid">
      <div class="card">
        <img src="https://via.placeholder.com/400x250" alt="Project 1" />
        <h3>Skeleton King (Roblox Model)</h3>
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/400x250" alt="Project 2" />
        <h3>Charged Sheep (Minecraft Asset)</h3>
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/400x250" alt="Project 3" />
        <h3>Combat System Demo (Roblox)</h3>
      </div>
    </div>
  </section>

  <section>
    <h2>Services</h2>
    <ul>
      <li>✔️ Custom 3D Game Assets for Roblox or Minecraft</li>
      <li>✔️ Freelance Work for Developers & Studios</li>
      <li>✔️ One-on-One Lessons in Animation or Roblox Scripting</li>
      <li>✔️ Asset Packs for Sale (coming soon)</li>
    </ul>
  </section>

  <section>
    <h2>Contact</h2>
    <p>Email: <a href="mailto:your@email.com">your@email.com</a></p>
    <p>Discord: YourDiscordTag</p>
    <p>Twitter: <a href="https://twitter.com/yourhandle" target="_blank">@yourhandle</a></p>
  </section>

  <footer>
    <p>© 2025 Wish. All rights reserved.</p>
  </footer>
</body>
</html>
