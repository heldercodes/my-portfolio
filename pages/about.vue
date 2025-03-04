<template>
  <section class="grid gap-4">
    <!-- About Me -->
    <div class="card">
      <h2 class="title mb-5">💻 About Me</h2>
      <p class="text-secondary-color">
        I started my journey as a freelancer, building projects for small
        businesses and personal clients. Over time, I expanded my skills and
        took on new challenges, leading me to work professionally in the tech
        industry.But beyond the lines of code and CI/CD pipelines, family means
        everything to me. Being a father has taught me patience, creativity, and
        the importance of continuous learning—both in life and in tech. 💙 I
        also love outdoor activities with my family and closest friends, whether
        it’s walking in nature or exploring new cultures and countries.
      </p>
    </div>

    <!-- Tech Stack -->
    <div class="card">
      <h2 class="title mb-5">🛠️ Current Tech Stack</h2>
      <ul class="grid sm:grid-cols-1 gap-4">
        <li class="text-secondary-color">
          🎨
          <span class="text-primary-color">Front-end:</span> Vue.js,
          Nuxt.js, TailwindCSS
        </li>
        <li class="text-secondary-color">
          🛠️
          <span class="text-primary-color">Back-end:</span> Node.js,
          Nitro, Supabase
        </li>
        <li class="text-secondary-color">
          ⚙️ <span class="text-primary-color">DevOps:</span> Linux,
          Bash, CI/CD, Docker, K8s, Security
        </li>
      </ul>
    </div>

    <!-- Timeline -->
    <div class="card">
      <h2 class="title mb-5">🚀 Timeline: My Journey</h2>
      <ul class="timeline">
        <li>
          <span class="text-gray-900 dark:text-white"
            >📍 Mercedes-Benz.io – Frontend Developer (2021 - Present)</span
          >
          <p class="text-secondary-color">
            Currently working on improving the product information pages for
            Mercedes-Benz. My role involves building Vue.js components and
            developing a fully automated SPA for these pages, ensuring a
            seamless and efficient user experience, focused on SEO, performance,
            best practices, and good architecture.
          </p>
        </li>
        <li>
          <span class="text-gray-900 dark:text-white"
            >📍 Worten – Full-stack Developer (2018 - 2021)</span
          >
          <p class="text-secondary-color">
            Developed and maintained the back office system for
            <a
              href="https://www.worten.pt"
              class="text-teal-500 hover:underline"
              >Worten</a
            >, a leading e-commerce platform in Portugal. Worked extensively
            with Vue.js and Vuex to develop scalable, modular UI components.
            Integrated multiple web services using Node.js as an API Gateway and
            managed AWS Cognito authentication. Contributed to migrating
            business logic, improving maintainability, scalability, and system
            efficiency.
          </p>
        </li>
        <li>
          <span class="text-gray-900 dark:text-white"
            >📍 PingPost – Full-stack Developer (2016 - 2018)</span
          >
          <p class="text-secondary-color">
            Worked on multiple projects, including Room Presence (Meeting
            Management System) and Refood (Food Redistribution Platform). Led
            efforts in front-end development, UI design, and system
            architecture, ensuring a modular, scalable, and maintainable
            codebase. Migrated the front-end to React and Redux while optimizing
            the back-end in PHP & MySQL. Developed a calendar scheduling system
            using Ajax to streamline platform operations.
          </p>
        </li>
        <li>
          <span class="text-gray-900 dark:text-white"
            >📍 Full-stack Freelance Developer (2013 - 2016)</span
          >
          <p class="text-secondary-color">
            Built websites for small businesses and personal clients, focusing
            on clean code and great UX. Developed full-stack solutions, handling
            UI/UX, business logic, and database integration. Technologies used:
            SEO, Responsive Design, PHP, JS, HTML, CSS, Analytics, MySQL.
          </p>
        </li>
      </ul>
    </div>

    <!-- Education -->
    <div class="card">
      <h2 class="title mb-5">🎓 Education</h2>
      <ul class="timeline">
        <li>
          <span class="text-gray-900 dark:text-white"
            >📍 Instituto Superior de Engenharia do Porto (ISEP) – 1st Year of
            Computer Engineering (Incomplete)</span
          >
          <p class="text-secondary-color">
            Completed the first year of Computer Engineering, gaining
            foundational knowledge in computer science and engineering. Paused
            studies for personal reasons, with potential plans to resume in the
            future.
          </p>
        </li>
        <li>
          <span class="text-gray-900 dark:text-white"
            >📍 Universidade Fernando Pessoa – Web Development (2012 -
            2013)</span
          >
          <p class="text-secondary-color">
            Focused on software engineering, Agile methodologies, and
            programming. Learned C#, Python, PHP, JavaScript, C, and PostgreSQL
            DBMS.
          </p>
        </li>
        <li>
          <span class="text-gray-900 dark:text-white"
            >📍 Escola Secundária de Rio Tinto – Computer Network Technician
            (2009 - 2012)</span
          >
          <p class="text-secondary-color">
            Gained expertise in networking, Windows/Linux OS, and server
            management.
          </p>
        </li>
        <li>
          <span class="text-gray-900 dark:text-white"
            >📍 Escola Profissional Tecnologia Eletrónica – Computer Electronics
            Technician (2007 - 2009)</span
          >
          <p class="text-secondary-color">
            Hands-on experience with computer hardware repair, network
            equipment, and component installation.
          </p>
        </li>
        <li>
          <span class="text-gray-900 dark:text-white"
            >📍 Escola Secundária de Rio Tinto – Computer Operator / Help Desk
            Technician (2006 - 2007)
          </span>
          <p class="text-secondary-color">
            Learned advanced office software skills and helpdesk troubleshooting
            for IT support.
          </p>
        </li>
      </ul>
    </div>

    <!-- Contact -->
    <div class="card">
      <h2 class="title mb-5">📩 Let’s Connect!</h2>
      <p>
        I’m always up for a chat about tech, new projects, or just sharing
        ideas. Feel free to reach out via GitHub, LinkedIn, or Twitter!
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Titles */
.title {
  @apply text-3xl flex items-center gap-2;
}

/* Timeline */
.timeline li {
  @apply border-l-4 border-teal-500 pl-4 mb-4;
}
</style>
