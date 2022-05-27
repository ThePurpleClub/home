import { html } from '../lib/htm-preact.js'
import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { avoidReload } from '../utils/avoidReload.js'

export const Music = () => html`
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
        title="Prince Rogers Nelson"
        subtitle="The most prolific singer-songwriter and multi-instrumentalist in the world"
        description="Born and raised in Minneapolis, US, The Purple One is a pioneer of Minneapolis sound, and always has an exceptional work ethnic and passion for music craftmanship."
        sidebarImage=${prefixUriIfNeeded('/assets/prince1.jpg')}
        showLinks=${true}
    >
        <div class="about-content">
            
            <div class="info">
                <h1 class="info-title"> My Musical Inspiration</h1>
                 <p>
                    Prince has been my greatest musical inspiration of all time since I was a little child. 
                    I remember I had a chance of attending his packed show at Harbor Fest beside Victoria Harbor, Hong Kong, back in October 2003. 
                    The performance was phenomenal. I loved it even though I did not quite understand the lyrics as a kid at that time.
                    Prince is the pioneer of Minneapolis sound. I love all of his music.
                    The Purple One has always been the greatest music icon on this planet. 
                </p>
            <div>
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/05wPNnG9hlNl5hRM6u2jEo?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            
           </div>
        </div>
        <footer>
            <a
                href="${prefixUriIfNeeded('/home')}"
                class="home"
                onClick=${avoidReload}
            >
                Home
            </a>
        </footer>
    <//>
`
