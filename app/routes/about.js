import { html } from '../lib/htm-preact.js'
import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { avoidReload } from '../utils/avoidReload.js'

export const About = () => html`
    <style>
    /*************************************adding font family imports***********************************/
    @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Joan&family=Noto+Sans+JP&family=Noto+Serif+JP:wght@200;400;500&family=Playfair+Display&display=swap');
        .about-content {
            display: block;
        }

        .about-content img.image {
            border-radius: 0%;
            width: 150px;
            border: 0;
            max-width: 100%;
            vertical-align: middle;
            float: left;
            margin-right: 2rem;
        }

        .info-title {
            margin: 30px 0 20px;
            font-size: 3.8rem;
            font-weight: 700;
            line-height: 1.1;
            font-family: 'Noto Serif JP', serif;/**************adding font family attributes***********/
        }

        .info p {
            font-size: 2rem;
            margin: 0 0 30px;
            font-family: 'Noto Serif JP', serif; /**************adding font family attributes***********/
            font-weight: 100; /**************adding font weight********************/
        }

        footer {
            padding: 10px 0;
            font-size: 1.4rem;
            letter-spacing: 1px;
            font-weight: 700;
            font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
            text-transform: uppercase;
        }

        footer a.contact {
            text-decoration: none;
            background-color: transparent;
            color: #999;
            border-bottom: none;
            font-size: 1.4rem;
        }

        footer a.contact:hover {
            text-decoration: none;
            background-color: transparent;
            color: #333;
            outline: 0;
            transition: all 0.4s;
            border-bottom: none;
        }
    </style>
    <${Page}
        title="Gyrfalcon"
        subtitle="This is the largest falcon in the world."
        description="Gyrfalcon is a strong and festy predator in the High Arctic. This bird is also the world's fastest bird and can fly with an average speed of 50-68 mph."
        sidebarImage=${prefixUriIfNeeded('/assets/default-about.jpg')}
        showLinks=${true}
    >
        <div class="about-content">
            <img
                src=${prefixUriIfNeeded('/assets/logo.jpg')}
                class="image"
            />
            <div class="info">
                <h1 class="info-title">The Birds of Prey Hub</h1>
                <p>
                    Hello! This is my personal website. This site orginally started with an intention of showing
                    my appreciation and interest in raptors. However, as I have been through different things lately
                    and starting to discover new goals in life, the contents of the blog is shifting to different things in 
                    life, but I will still make posts about birds for sure.
                    I maybe posting stuff about birds and later I maybe posting stuff about my favorite place to live.
                    You never know!  
                    This web application uses Google Drive as the backend, and only a few static files are
                    hosted on GitHub Pages. The content is displayed with React JS.
                    Hope you enjoy reading my posts, and hopefully the contents displayed on this site are something you can relate to. Stay tuned!
                    Feel free to leave comments and connect with me here! Thank you! 
                    Happy chirping!
                </p>
                <P>***** WARNING: For better user experiences of reading blog posts underneath the white line on the orange menu, please use desktop computer to view the posts. ***** </P>
                <p style="text-align: left;"> <i>~Po Tin Mak Elly</i></p>
                
            </div>
        </div>

        <footer>
            <a
                href="${prefixUriIfNeeded('/contact')}"
                class="contact"
                onClick=${avoidReload}
            >
                Contact
            </a>
        </footer>
    <//>
`
