import { html } from '../lib/htm-preact.js'
import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { avoidReload } from '../utils/avoidReload.js'

export const About = () => html`
    <style>
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
            font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
        }

        .info p {
            font-size: 2rem;
            margin: 0 0 30px;
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
        subtitle="The largest falcon in the world"
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
                    Hi! This is my portfolio site. This blog originally started with an intention of showing
                    my appreciation and interest in raptors. However, as I have been through different things lately
                    and started to have different goals in life, the contents of the blog are shifting to different things in
                    life. I maybe posting stuff about birds and later I maybe posting stuff about my favourite place to live.
                    You never know! 
                </p>
                <p>
                    This web application uses Google Drive as the backend, only a few static files are
                    hosted on GitHub Pages, and the content is displayed with React JS.
                    Hope y'all enjoy reading my posts, and hopefully the contents written on my posts are something y'all can relate to. Stay tuned!
                    Feel free to leave comments and connect with me here! Thank you! :)
                    Happy chirping!
                </p>
                <p style="text-align: left;"> <i> --Po Tin Mak</i></p>
                
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
