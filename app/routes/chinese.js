import { html } from '../lib/htm-preact.js'
import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { avoidReload } from '../utils/avoidReload.js'

export const Chinese = () => html`
    <style>
     /*******************import new fonts family*********************/
     @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Joan&family=Noto+Sans+JP:wght@100;400&family=Noto+Serif+JP:wght@200;400;500&family=Playfair+Display&display=swap');
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
            font-family: Noto Sans JP', sans-serif; /**************adding font family attributes***********/
        }
        .info p {
            font-size: 2rem;
            margin: 0 0 30px;
            font-family: Noto Sans JP', sans-serif; /**************adding font family attributes***********/
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
        title="黑臉琵鷺 (Black-faced Spoonbill)"
        subtitle="黑面琵鷺有着扁平如湯匙狀的長嘴，與中國樂器中的琵琶極為相似，因而得名。在香港，你可以在后海灣一帶，包括米埔自然保護區及香港濕地公園， 看見他們的蹤影。"
        description="
        在2021年，后海灣（包括香港及深圳）只錄得336隻黑面琵鷺，按年下跌6.9%，在過去7年間跌幅達15%。黑臉琵鷺的棲息地后海灣持續受發展威脅，將來或進一步惡化。 ~香港觀鳥會"
        sidebarImage=${prefixUriIfNeeded('/assets/black_faced_spoonbill.jpg')}
        showLinks=${true}
    >
        <div class="about-content">
            
            <div class="info">
                <h1 class="info-title">關於我們</h1>
                <p> 
                你好！這是雀鳥中心的網頁。我是這網頁的創辦人愛莉。
                【雀鳥中心】是這網站的名字，並沒有跟任何政府和非政府機構有關聯。這是我個人的網誌。
                這網誌建設的原因是本人希望可以傳遞和展示我對鳥類學的熱愛和興趣，以及啟發和鼓勵大眾一起欣賞與保護野生雀鳥及其生態環境。
                但是，隨着本人最近經歷的不同事情，以及本人不斷在發掘和學習新的東西，這個網站發行的博文也不單單只是關於鳥類而已。
                你大概可能會見到本人發行有關鳥類的博文，而另一時間，你大概可能會見到本人發行了有關我最喜愛的城市的博文。
                我的博文可以什麼也是，應有盡有，只有你定期探訪我這個網頁就知道了！
                這網頁程式是用Google Drive為後端，前端展出是用ReactJS, 並且在GitHub上發布。
                希望您喜歡和享受我寫的博文。如有任何問題，請在這網站留言，謝謝！

                </p>
                
                
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