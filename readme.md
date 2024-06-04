
<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
 <li><a href="#about-the-project"></a></li>
 <ul>
   <li><a href="#built-with"></a></li>
 </ul>
 <li><a href="#support">Support</a></li>
 <li><a href="#about-the-project">About the Project</a></li>
 <li><a href="#getting-started">Getting Started</a></li>
   <li><a href="#prerequisites">Prerequisites</a></li>
   <li><a href="#installation">Installation</a></li>
 <li><a href="#usage">Usage</a></li>
 <li><a href="#roadmap">Roadmap</a></li>
 <li><a href="#license">License</a></li>
 <li><a href="#contact">Contact</a></li>
 <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

Tech Stack
---

- [Ionic](https://ionicframework.com)
- [Angular](https://angular.io)
- [Firebase](https://firebase.com)
- [Sendgrid](https://sendgrid.com)

About The Project
---

A portfolio for Douglas White presenting some of the functionality available in
an Ionic progressive web application.

Getting Started
---

  To get a local copy up and running follow these simple example steps.

Prerequisites
---

  1. Install
    [NodeJS](https://www.nodejs.com)

  2. Using npm, install:

```sh npm install npm@latest -global```

```sh npm install @angular/cli@latest -global```

```sh npm install @ionic/cli@latest -global```

```sh npm install firebase-tools@latest -global```

Acquire Accounts
---

  1. Get a free Stripe Account at [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
  2. Get a free Firebase Account at [https://firebase.com](https://firebase.com)
  3. Get a free Sendgrid Account at [https://app.sendgrid.com](https://app.sendgrid.com)

Installation
---

1. Clone the repo
```sh git clone https://github.com/apsistec/expert-fit.git```
2. Install NPM packages
```sh npm install```
3. Setup Firebase backend
```sh firebase init```
4. Enter your APIs in `environments/environment.ts` and `environments/environment.prod.ts`

    ```js
      export const environment = {
        production: "boolean",
        firebaseConfig: {
          apiKey: "...",
          authDomain: "...",
          databaseURL: "...",
          projectId: "...",
          storageBucket: "...",
          messagingSenderId: "...",
          appId: "...",
          measurementId: "...",
        },
        stripePubKey: "pk_test_ API",
        taxRates: ["enter API"],
      };```

5. Compile the function code

    ```sh
    cd functions```

    ```sh
    npm install```

    ```sh
    ng build```

    ```sh
    cd -```

6. Compile the app code -production quality

    ```sh
    ionic build --prod```

7. Work on the app code with hot-reload

    ```sh
    ionic serve```

8. Deploy to Firebase Authentication, Hosting, Database, Serverless and Storage

    ```sh
    firebase deploy```

Contributing
---

  > To get started...

  **Step 1** Install Repo

  *[ ] **Option :one:**

  :trident: Fork this repo:

  [dw-portfolio Repo](https://github.com/apsistec/dw-portfolio)

- [ ] **Option :two:**
  Clone this repo to your local machine:

    ```shell
    git clone https://github.com/apsistec/dw-portfolio.git
    ```

    **Step 2** Code your Code

- [ ] **Option :one:**

    Add previously approved **new code**

    ``` js
      baz = foo(bar) * foo(bar)
      betterBaz = foo(bar^2)
    ```

    -or-

- [ ] **Option :two:**

    :mag:Find then :wrench:work on the previously approved **changes** and/or
     **refactoring code**

    ``` js
      newFoo(bar2)
      fooBar(newBaz)
    ```

    **Step 3** Pull Request

- [ ] 🔃 **Create a Pull Request at**

    ```http
    https://github.com/Apsistec/dw-portfolio/pulls
    ```

    **Step 4** Submit for Review and Acceptance

- [ ] **Submit!** :beer:

Contributors/People
---

[![**Apsistec**]](https://avatars0.githubusercontent.com/u/6438623?s=400&u=aaaf57f08f5fff530672ecd3a18f26a53f704850&v=4)

Support
---

> Reach me at any of the following

- [dw-portfolio Contact Info](https://DouglasWhite.app)
- [Slack Channnel](https://apsistec.slack.com)

Copyright   © [dw-portfolio](https://DouglasWhite.app)

[contributors-shield]: https://img.shields.io/github/contributors/apsistec/dw-portfolio.svg?style=for-the-badge
[contributors-url]: https://github.com/apsistec/dw-portfolio/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/apsistec/dw-portfolio.svg?style=for-the-badge
[forks-url]: https://github.com/apsistec/dw-portfolio/network/members
[stars-shield]: https://img.shields.io/github/stars/apsistec/dw-portfolio.svg?style=for-the-badge
[stars-url]: https://github.com/apsistec/dw-portfolio/stargazers
[issues-shield]: https://img.shields.io/github/issues/apsistec/dw-portfolio.svg?style=for-the-badge
[issues-url]: https://github.com/apsistec/dw-portfolio/issues
[license-shield]: https://img.shields.io/github/license/apsistec/dw-portfolio.svg?style=for-the-badge
[license-url]: https://github.com/apsistec/dw-portfolio/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/apsistec

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:

- Your time should be focused on creating something amazing. A project that solves a problem and helps others
- You shouldn't be doing the same tasks over and over like creating a README from scratch
- You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![Vue][Vue.js]][Vue-url]
- [![Angular][Angular.io]][Angular-url]
- [![Svelte][Svelte.dev]][Svelte-url]
- [![Laravel][Laravel.com]][Laravel-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo

   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```

3. Install NPM packages

   ```sh
   npm install
   ```

4. Enter your API in `config.js`

   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - <email@example.com>

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
