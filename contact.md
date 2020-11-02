---
layout: blocks
title: Contact
date: 
page_sections:
- template: navigation-header-w-button
  block: header-2
  logo: "/uploads/2020/10/31/icon-with-arial-text-6.png"
  navigation:
  - link: "#services"
    link_text: Services
  - link: "#about"
    link_text: About
  cta:
    url: "#contact"
    button_text: CONTACT US
- template: 1-column-text
  block: one-column-1
  content: '<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>'
  headline: ''
  slug: ''
- template: detail-content
  block: text-1
  content: "<pre><code></code></pre>"
  headline: ''

---
