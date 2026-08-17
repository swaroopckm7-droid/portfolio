export const downloadOfficialResumePDF = () => {
  const printWindow = window.open('', '_blank', 'width=850,height=1100');
  if (!printWindow) return;

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>C_Santhi_Swaroop_Resume</title>
        <style>
          @page {
            size: A4 portrait;
            margin: 12mm 15mm;
          }
          body {
            font-family: Georgia, "Times New Roman", serif;
            color: #111;
            background: #fff;
            margin: 0;
            padding: 0;
            font-size: 11px;
            line-height: 1.35;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          a {
            color: #000;
            text-decoration: none;
          }
          .header-container {
            width: 100%;
            margin-bottom: 14px;
            text-align: center;
          }
          .name {
            font-size: 22px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0 0 6px 0;
            color: #000;
          }
          .contact-line {
            font-size: 11px;
            color: #222;
            margin-bottom: 4px;
          }
          .section-heading {
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 12px;
            margin-bottom: 4px;
            color: #000;
            border-bottom: 1.5px solid #000;
            padding-bottom: 1px;
          }
          .row-flex {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
          }
          ul.resume-list {
            margin: 2px 0 5px 18px;
            padding: 0;
          }
          ul.resume-list li {
            margin-bottom: 2.5px;
            font-size: 10.5px;
            color: #222;
          }
        </style>
      </head>
      <body>
        <div class="header-container">
          <h1 class="name">C SANTHI SWAROOP</h1>
          <div class="contact-line">+91 88389 55211 &nbsp;&nbsp;—&nbsp;&nbsp; csan.aiml2024@rmd.ac.in</div>
          <div class="contact-line">
            LinkedIn: <a href="https://linkedin.com/in/santhi-swaroop-139900331">linkedin.com/in/santhi-swaroop-139900331</a>
            &nbsp;&nbsp;—&nbsp;&nbsp;
            GitHub: <a href="https://github.com/swaroopckm7-droid">github.com/swaroopckm7-droid</a>
          </div>
        </div>

        <div class="section-heading">PROFESSIONAL SUMMARY</div>
        <p style="margin: 3px 0 6px 0; font-size: 10.5px; text-align: justify; color: #222;">
          Motivated B.Tech Artificial Intelligence and Machine Learning (AIML) student (2024–2028) with hands-on internship experience in Python programming and data analytics. Certified in Generative AI, Agentic AI, and Oracle Cloud Development, with strong knowledge of Python, Java, C++, Data Structures, and Machine Learning fundamentals. Successfully completed the German Language A1 course, demonstrating strong communication skills and a commitment to continuous learning. Passionate about building scalable AI and ML solutions, solving real-world problems, and contributing to innovative, data-driven technologies.
        </p>

        <div class="section-heading">EDUCATION</div>
        <div style="margin-bottom: 5px;">
          <div class="row-flex">
            <strong style="font-size: 11px;">B.Tech in Artificial Intelligence and Machine Learning</strong>
            <span style="font-size: 10.5px; font-weight: bold;">2024 – 2028</span>
          </div>
          <div style="font-size: 10.5px; color: #333;">R.M.D Engineering College, Chennai, Tamil Nadu</div>
        </div>
        <div style="margin-bottom: 5px;">
          <div class="row-flex">
            <strong style="font-size: 11px;">Higher Secondary Education (12th)</strong>
            <span style="font-size: 10.5px; font-weight: bold;">2024</span>
          </div>
          <div style="font-size: 10.5px; color: #333;">RMK Matriculation Higher Secondary School</div>
        </div>

        <div class="section-heading">SKILLS</div>
        <div style="font-size: 10.5px; color: #222; margin-bottom: 2px;">
          <strong>Programming Languages:</strong> C, C++, Java, Python
        </div>
        <div style="font-size: 10.5px; color: #222; margin-bottom: 2px;">
          <strong>Core Concepts:</strong> Data Structures, Algorithms, OOP, Problem Solving, Machine Learning, Basics of AI
        </div>
        <div style="font-size: 10.5px; color: #222; margin-bottom: 2px;">
          <strong>AI/ML & Cloud:</strong> Generative AI, Agentic AI, LLMs, Data Preprocessing, Model Training, Oracle APEX Cloud, Data Analysis, Data Visualization
        </div>
        <div style="font-size: 10.5px; color: #222; margin-bottom: 5px;">
          <strong>Tools:</strong> VS Code, Git, REST APIs &nbsp;&nbsp;—&nbsp;&nbsp; <strong>Languages:</strong> English (Professional), Telugu (Native), Tamil (Professional), German (A1 – Basic)
        </div>

        <div class="section-heading">PROJECTS</div>
        <div style="margin-bottom: 5px;">
          <div class="row-flex">
            <strong style="font-size: 11px;">AI-Powered Data Analytics Dashboard</strong>
            <span style="font-size: 10.5px; font-weight: bold;">2026</span>
          </div>
          <ul class="resume-list">
            <li>Developed a Python-based analytics pipeline integrating data cleaning, visualization, and ML-based trend prediction for real-world datasets.</li>
            <li>Applied Generative AI concepts to automate insight generation, reducing manual analysis time by 40%.</li>
            <li>Built interactive dashboards to communicate findings, improving stakeholder understanding of key business metrics.</li>
          </ul>
        </div>
        <div style="margin-bottom: 5px;">
          <div class="row-flex">
            <strong style="font-size: 11px;">Machine Learning Model Implementation</strong>
            <span style="font-size: 10.5px; font-weight: bold;">2025</span>
          </div>
          <ul class="resume-list">
            <li>Implemented supervised learning models in Python for classification tasks, achieving 85%+ accuracy on test datasets.</li>
            <li>Applied data preprocessing, feature engineering, and model evaluation using core ML libraries.</li>
          </ul>
        </div>

        <div class="section-heading">INTERNSHIP</div>
        <div style="margin-bottom: 5px;">
          <div class="row-flex">
            <strong style="font-size: 11px;">Data Analytics Intern</strong>
            <span style="font-size: 10.5px; font-weight: bold;">May 2026 – June 2026</span>
          </div>
          <div style="font-size: 10.5px; font-style: italic; color: #333; margin-bottom: 1px;">Innovation Tech Tree, Remote, India</div>
          <ul class="resume-list">
            <li>Analyzed real-world datasets using Python, applying data cleaning, transformation, and exploratory data analysis to identify trends and actionable insights.</li>
            <li>Developed interactive data visualizations to communicate findings, improving stakeholder understanding of key business metrics.</li>
            <li>Collaborated with cross-functional teams to validate data quality and streamline analytics workflows, reducing manual reporting effort.</li>
          </ul>
        </div>
        <div style="margin-bottom: 5px;">
          <div class="row-flex">
            <strong style="font-size: 11px;">Python Programming Intern</strong>
            <span style="font-size: 10.5px; font-weight: bold;">June 2025 – July 2025</span>
          </div>
          <div style="font-size: 10.5px; font-style: italic; color: #333; margin-bottom: 1px;">CodeAlpha, Remote, India</div>
          <ul class="resume-list">
            <li>Built and debugged Python applications focusing on automation scripts, data handling, and algorithmic problem solving.</li>
            <li>Applied OOP principles and data structure optimization to improve code efficiency, reducing execution time by 20%.</li>
            <li>Delivered multiple project modules demonstrating proficiency in Python fundamentals, file I/O, and modular design.</li>
          </ul>
        </div>

        <div class="section-heading">ACHIEVEMENTS AND EXTRACURRICULAR</div>
        <ul class="resume-list" style="margin-bottom: 6px;">
          <li>Completed multiple professional certifications in AI, Cloud, and Programming from Oracle and NPTEL.</li>
          <li>Active learner and contributor in AI/ML and software development communities.</li>
          <li>Participated in coding practice and problem-solving on platforms including Skillrack and CodeTantra.</li>
          <li>Demonstrated continuous learning through self-paced courses in Generative AI, Agentic AI, and Industry 4.0.</li>
        </ul>

        <div class="section-heading">CERTIFICATIONS</div>
        <ul class="resume-list">
          <li><strong>Oracle Generative AI Professional</strong> — Oracle &nbsp;&nbsp;—&nbsp;&nbsp; <strong>Oracle APEX Cloud Developer</strong> — Oracle</li>
          <li><strong>Agentic AI Certified Foundations Associate</strong> — Oracle</li>
          <li><strong>Industry 4.0 and IIoT</strong> — NPTEL &nbsp;&nbsp;—&nbsp;&nbsp; <strong>Soft Skill Development</strong> — NPTEL</li>
          <li><strong>Data Structures using C++</strong> — CodeTantra &nbsp;&nbsp;—&nbsp;&nbsp; <strong>Master in Software Application</strong> — Apollo Computer Education</li>
        </ul>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        </script>
      </body>
    </html>
  `);

  printWindow.document.close();
};
