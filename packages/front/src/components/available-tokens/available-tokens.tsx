import {
  AvaiableTokensAsset,
  LeftWhiteStar,
  RightWhiteStar,
} from "../assets/available-tokens";
import { ButtonavAilableTokens } from "./button";

const tokens = [
  {
    name: "Near",
    symbol: "NEAR",
    image: "https://near.org/wp-content/uploads/2021/09/brand-icon-300x300.png",
  },
  {
    name: "Aurora",
    symbol: "AURORA",
    image:
      "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 288 288' style='enable-background:new 0 0 288 288;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%2370D44B;%7D .st1%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cpath class='st0' d='M144,0L144,0c79.5,0,144,64.5,144,144v0c0,79.5-64.5,144-144,144h0C64.5,288,0,223.5,0,144v0 C0,64.5,64.5,0,144,0z'/%3E %3Cpath class='st1' d='M144,58.8c7.6,0,14.5,4.3,17.9,11.1l56.2,112.5c4.9,9.9,0.9,21.9-9,26.8c-2.8,1.4-5.8,2.1-8.9,2.1H87.8 c-11,0-20-9-20-20c0-3.1,0.7-6.2,2.1-8.9l56.2-112.5C129.5,63,136.4,58.7,144,58.8 M144,45c-12.8,0-24.5,7.2-30.2,18.7L57.6,176.2 c-8.3,16.7-1.6,36.9,15.1,45.3c4.7,2.3,9.9,3.6,15.1,3.6h112.5c18.6,0,33.8-15.1,33.8-33.7c0-5.2-1.2-10.4-3.6-15.1L174.2,63.7 C168.5,52.2,156.8,45,144,45z'/%3E %3C/svg%3E",
  },
  {
    symbol: "NEKO",
    name: "NEKO",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' width='46px' height='46px' viewBox='0 0 46 46' enable-background='new 0 0 46 46' xml:space='preserve'%3E%3Cimage id='image0' width='46' height='46' x='0' y='0' href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA CXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5gQVFS8KdqrjugAAE7dJREFUaN6dmnmQ3dV15z/3 /ra3d79e1K9b3Y260S7UsiQQmHWMsCFgwQQnMF7whLKcOA5xypSNpybBxGUnM2GSEkk5M2Q8NeUI TBJXGAw4GCwEBkuAkNECtNBGa+n99fr6rb/l3ps/XqtRG+HB/lXdrnqvfv1+n3Peued8z7lP8Gtc n7th7aLXRutYpKKVRpsrpJSXW7a9znGcTttxG6VlxQC00n4URTNhEAwppfu1YZ8QvGZb4rgQ1M7/ vEefP/KhWcSvC2y0Rhu9VCt9o+04t6UbspvbOrrbOro67VxHF9nWDpKpNI7jAZqwOkZ5cj8zY28w Nl5jZCyMxieifLGofxFF5ikpeVZIMSzPI/kwBvxK8EXAxmC07tBa3xVPJO/q6lm+Zv2lV8rVa1fS mhkkJs4gpQG3BxFbASbC1I5C9SCEeTAh2kCtZshPRhw76fPWkaoZHArfqdb0TinFI0IwIj6kAeLD QCOEE4XB7a4Xu2/56ks2Xb31ZtZsuIxk0oWZH2BKezAmQkWaINQEkYNSCmECbFviug6OY2FZ5z/O UK5o3jnus3dfmXcH/IN+YB60bfH/gOD/By9+FbQxBmNMzhh9f1t7190fu/m341uuuYFkugHULHr2 3yiO/JiR0VmGhuaYmixTrfjoSCEwSCGQlsTxHJLpGC2tKTo6MixpTRKPO2AAUTdg/4EqL+4pVcfz 4feFEN8WgtFz3r8QvPhgaI3RZq20rL9b+5HLtt76n+6mu2cFqClU6QCjJ5/j7YOvcfrUJEQRLRmX tmaPbMYjEbOwpQCtiUJFrRpRLIXMliIKPlgJj86eZlasaKGxIUbdAsPQSMRTzxU5crT2gtZ8RQj6 PwhefBC01maT47jfu/JjN27adufdpDMupvgyk2ee5fW9r3Py5DjNaY81FzfS2Z4mmXSRlgUCjKkv bcBog1YGHURE1YDaXI3ZmRqjswElIele0czaNa3EYzZgKFXg354v88rr5YNhxHYpOHAhePF+aIPR eq3tuI/8h9+6bdMn7/g9Yo5PNPkD+vf/mD173iXmWFzW18ZFnWlcx677y5j5/1+8tAFjxPw9oCND VA0IZqvMTdcYnqkRJW02bM7R3pZCYAgiwTMvVvnZ3srBKDJ3Xcjz1jnwvt7Wc+A5adnfu2rrzVfd 9pkvEnMq1Ea/z8s//SGvvHKG1T1Zrr+yi9ySJELUgd7bbu8HN0Ysfo1AOjZ20sONu6SkDWXNiYEZ jG3INnpYQtPb7VCpifbBkXC1MewSghLAmwMT74Gfl0EcrfV/W79hxZ133HUnSess1bHH2P3Mj+h/ e5zrtnSweX0brisvuNPrYO8ZoH8Zet5KraHia+Z8Q2BJXGGTjGzODhYJULQ0edhCc1GXw/iU6RnP q4SU7AJUX28rbw5MYJ//UKXMp3Jt7t3bbqiR8v+BYK7Eyy8c49jRCa7d0snS9gyD4zWCUNPU4NCU cRDi/JA437OLjTj3Xs3XvHF0jr1vVZkqxVEqpLvJ57reFLlYA2f7S1gWrOxtIGErbr7OJT8R3T2a j35uSfFP50LGei+26XBd+fe3fDzT1bfOweiAAweH2bdvkC0b2kkkEzz+wiRP7DG8fjLFnsNlxvIF upa4JGP2+8AXeXveAD/QPPXzKfae6mH5xt9h06Wf4KqP38HZqRh79h9gZYtHox1nZKxMosGQTtik YxrLtuwTp/XFSvFjISj29bZi9fW2og1obf5o9Qrvc9tuzOA4kpGROZ597jirerLkco3836enCBtv 5t4/3cFtd3yBjR/dxqmJDE/vOszS5oDWRg+tPyCu59cLv5jhWPEyNq6+muDxZ1jz+D8ze/woV/3h l3lnsMj4wDssX5LCUi6j0yWW5GwcS9DSYBgcM7n8tJlEsEcI5sG1WRqPy7/edlOmtbvLJfAVu54/ iQ4jrrx0KS8dKDAcXsHfPPQ/GTp0kEN/+RfMvHuSm7Z/kRXrt/JPT7xKW3qW5kYPrS8c12dGK+w9 fTHrV13H4Hcf5TMDR7iiUqBrcJB9o6Os/uxdPPeTZ+lrj+FIB79sUaXCkhYH1zLY0nDsNB2R4kkp mJPzm+Wm7k5nzarlLkZpBgamOHN6mkvXL8GxLQ4cD/nUnf+Z46/vY/gLX+Q/PvkkV3/3u7z06U+T TSe55788zE/f6mR8yl/YLwvxAWhtOHTKY8vVd3D2X3dxzeQ4y3WZUAgywLJXXiEWhrhNXUzPRSgt 8ESc8VMWM7M1tFKs6NR0tZnVWvNbAFJrYrYtbutbGxMJzxD4IYffHKU549LTlcEPNOXAo7Orizef eJrG2ZCYkHQIwa379nHg859H6og7f/9B9h7LMlfyKRR98tM1hvIVhsYrnDxbpKnn48jBGRJHBviI KiDnrTJC0F4qEY0M09TezXQpQiuJ1hJRTXHmdIhWmrijWLvMCNvmVm2I20qbVU1Ze/PKXhe0ZiJf YmiowEfXtxKLOehCDYSFEDA2OUdOukht0EBaCG4+dIifbN/OFY/+gI03fIMDb/wjXjxDJYwRRBY1 P2C2MIdx4cxLz9ISFTBRBTGfHgyQApicpKGphcqUQWuJUmBpj5FBi+U9AcmYxcUdmkzC2TxTFKts Y7gi12ovacmCVorTZ2YR2tDVnl6orUIIjDFUQ40vrYWiY4CMEHxi3z5e+ON7uH7nI2zech227SAt CykEBoOKFKVykdFPj3Lw1Vf5Xzt3snnPHm7WGlcIPEDOzBBPJwmVqHtcgdaC8kyc/ESBZUsFTSlD a6PdOj0nPiql4PKOnG27lib0IwaH52hOu2Qy3kIZl/PeEcYwJ13UeRJHA83AktdfZ2JkmEQijuva 2JZASrCkwHVtmrJZ1q1dy+e+8AXufeIJTt1/P3+bTlMwhhhgT00hpQVGolR9aS2JfI/RsbpTXUuR yypbCC6Xti3WtbVIhFFUqwHT01VaGmPYTl0NCAFSCixpYVsWU9KjJJ0FdGkM7zoO1S99id41a/gw V2tTE/c+8AC5B/87f5VJMQskp6fRUYglLJQSaC1QSmCUzeSkRRhECKNpbYiwLdZJxxadjWmBUYpy KaBWi2hMekgp58EFFgqhAlzHoSBdzth1MSSMYdDzOHPffVx3//3EXPdDgQNYQnD3HdvY9OU7+ZtE jKhQQFcrOMJG6brHjRGAoFy0qfkKozUNcYVtmU5pOyIb9wxoTaUaopUh7tkL8tS2JLb2YXyARCZF ZOCwm6VqJPlkkvyf/zlXf/ObJGOx+dSnyefzzM7O/krwt/v7+d7D/xvPgtbbr+eHYYCMIlzbPq+Q 1Vfg2/g1DbqeXWyLRmlJPFtqjFKEQYQxYM1vQGMgGZM0ZmD8yEE+cuUl+GmPU8Zlf+dK/P/xIBu/ /vUFT09OTvK1r32NG264ga9+9avs3r0brfX7oHft2sUnb7mF7/zDTvrdblpWXkKYy/B2/1skHHfB 08YIlDFoJQnDOqMlNJYwnjxXMYzWmPmHaPWeta4juWZTgp/seZFNq3J8csd/Ze29v0fnP/8jPX/4 ZVxrQRnz0EMPsWPHDlatWsW3vvUtoiji6NGji6BrtRoPPfQQZ86c4Z577uHPvvlNrvrU57lsVQ+z I4PzGeyc3jHz3hcYXWdknlEqjR9G9bGDLevpLwjMArw2sLYnSY0JJo4dZusVvXzm3rtYuWX9ovap VCqxe/duAK699lq6u7vp6+tjbGxsEXi1WmVkZITe3l6SySRhGFKqVOle0szFnW3kizXE/CcrDZE2 SGmw0BilCUNQGl9GkZmp+vW6H3PqKaxUVqjILIRLGBmSXoykLWDgMEyPgbAXAVmWRXNzMw888ADJ ZJLHHnuMhx9+mCiKFt2XyjRw7XXXsXPnTpLJJDfedBP3feWP6MnGubgzx3ixyrkCEum6x21b4UgN 2lDxIdJiVoahGZqdq38NcVfguZJCMSSomveUHpCMeSQSSVh7LfR8BGxnEVA8Hmf79u1s3bqVkZER PvvZz7J//342b9pEeXCQ2f2vMPf6ywRHD7P9t29jemqK559/nlOnTvG7t97CuhW9NKeTlIJoQV0G kUYbiHkBrmUwylAoW0RKDNmRon98ymzRGjwHGtM204UahYmI5rhbj7GaQIQRVd+n4byY/uVr27Zt 9Pf3k0gk2LFjB79zxx1EJ07ws+98m0tSeZoTGp3wWJbNku27nZV/dj/JVJKluTZ4cxeWWNwl+ZHC YGhI13CEQUUwOWcTadFva232jeTVXX6I7QhDR7PH4XyV0VMBpWmBiqBaMkRzVU4MDpEbH4Dmrnpl Ou8K/BoIQV9fH319fQvvH3vhRQpnh5jtlLQnNNI1CDWMyp+gc9X2hft0Ist0qYJnW4AgUIpQGZAR rdkawhj8QDBWcCJj2CeF4LXxCZWfLAgwms5WFy0jpko1ipOG0jREgaQlbrHvyAkYPgH50+/ztpCS /MgglVJxQSoAdFxzDS0bNnBizHBsVFMe86nOpHA2f2LB4JnpScanJhmcmKEh5mIMVEOF0hCPV1jS EIAyTJUsJkv2hBC8am3oXVIIQ65uaTCrupsDPEcwMuUzW9RkvQaMrmsG17I4eGaKdcsuIitqkG0H L7Foczqux9T4MHOFGYQAL5bAa2yg7bLLsDKNFGQjalkfDb/7ByQuvZbpyXEKM5NIIRDTYzzywx+x OpvGtSzmagGRNnR1TbC8rQYa3hpO8s548iXgYVtKaqEyT/a/az656SIj4q5hTVeMFydLzNVqpOwU SoNnOTS7VR7f+wZfzzXD2z+DvushmX1vgyaSdPWuQkUhQeBjjEEIQaqri/Vf+oN6HhZiQW0mUmka m5dgCcPLT75FpVQhu6yNoh8SaXC8Khd3FJEaqoHgWD5hIi2esqWpSgApeG4oL945MSQxWnFRq0Ou STBcmSSM6pVLKcnylgyH+t/hxbdOQmEcDu+GQn4BXEURE2NDTOZHcR0PUast7DZTLmMGBhBK1UNL KfADRgYHCI6/wb8+81N6GlP10UWo0MawtGOSJckIowwDkzGGC95RIfgJzPecAuaCSGb8gBtWL/WJ 2ZqkJzk2VgIdIy6SaC2whE3Skjx94Dg9HTk6UjZMDoLtQipLqVQCDI3ZFmzXRY+Ook+cgMlJzMgI wnHQAwMwM4MeHsFtbSFRzvPMY9/nR7tf46ruHKUgIlKQSM+yZXWepIBqINl9spl82d1hCfPMQrMs 6tJgYK5qXZ+OqfbOpoCUJ9BG8+5EkRhpbBNDa0HKdbGN4l9efRvb9VjZmsGaHYG5SbxUhnhTG5ZT 1y6ioQERj4NlI3t6kB3tiHQaMFhNKRg/xp6nH+evHnmSLbkmPNvGDzXCqbJh9RBdqQij4PBohjdG MocM4htSUASw3hyYODd+KyotCtNF65aLWnwnHVO0pOqbZKhQIU4DlnExQDbu0exZPPvGEfYeP4sw hkZdI1kYgdlR8MugItAK4bmIVByhAihOIcp5xOwZ8of38n8e/Rf+/vFdbGxpoDWVoBoqjAxZsXyQ 9W0VRARjRY9dA621km/fJ6V5RVCfHwpYPIJTWjy0uqP25dsvnSHpKSo1w8+P1xidSNEue/FIYDAI 6jri9HSR41MllOPS25ljQ28nqzrbyLU0kcmkcVxvPu35FObmODUyziv977LnrRNIP2BzRyuebeFH GiMDli0bYstFBdwIyqHk6RM5jk+nHpbC/AnzA/8F8PPhjSEnBI9euqy89cZLZnEtQ8U3vHbK5+x4 nFaxjASZBT0hqGeIuVrAcKHMSLFKIVQYaeG4No5t18t3GFHzA4RStMY8eprSpD0PP1JE2oBT4eKe YTa2F3EVBJFg95lWDow3vmAMnxOC0XPQAIuVUp1lTBv+5MCZ5E5H6k0fW1Ugbhuu6nFp8GocGTlO JeygUbRh46DnW+d0zGVNzGNNmyDSGj9U+JEiUBpjBLYUOPMNdKQ1tUhRDhQaRSw9zbreMVY2+Fgh +JHg58PNHMo3HNRGfEUIM/rLmAvC41ysz38FE9qIX4wW3MvKvmxfmvGJ24olKYuWpGZGzTLhz6G1 xDIOwlgLwkgbwAgsKXEsC9eysKRAmbr2qIYKP9JERiG8OZZ2DbNl+QTdsRARQjmw+NngEg7kGw9G Wn5RCHP4XFhccLB/gZDBwFop+LvlLdWt1y+fIZf2wUCIYcyPODYmmJhOoKqNWFEaS3sIU+/U9blG YH7V7VEYGeAmSrS1FFjeVibnRlhB/eRivBLjpeFW3i2kXpj3dP+FoC8Ivgi+/ienEfe3JMK7L+8q xC9pK5KwFdIxGMcw4xuGCjA2IykUXWo1DxW6GG2DmR9R2BGxWEhDyqet0SeXjGgQBunXpWolsuif bmB/vqk6XfO+LzDfRjD6QdAfCP5LmeZctrndsfQ3uhtqGze2z9HbWCZuK6QF0gbjGCIbagqqIUT1 AoltQcwGVxvswIBvMEF9nliNLE7NJTk0lWWwlDgYavmgJcxvflx4Ifh6NyQ6tOGumK0/n0v5a1Zk S6KnoULWC/AshRODeIvAcuvxLgCtDLUpTTCnURH4SjLju5wuJjlZSJuxSvwdX8tHBDwihBk+H+g3 OqD9QAPq5zhLteEmS5pbk47a3BwL2lrjvt0c82lpUWSyGlsahIBKwTCbFxRDh6maS74ai6Z9N1+O 7F8oLZ6SgmcFZvjDnij/WuAfED4YQ0wZsdIgrhCYyy1p1tnSdNqWyVrCeABKCT/SYjYyYlAZccQY 8ZoQZp8lzDHBb/4jhH8HsQSGthsv6IwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDQtMjFUMjE6 NDc6MDgrMDA6MDDs4phyAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA0LTIxVDIxOjQ3OjA5KzAw OjAwO8gregAAAABJRU5ErkJggg=='/%3E%3C/svg%3E",
  },
  {
    name: "SWEAT",
    symbol: "SWEAT",
    image:
      "data:image/svg+xml,%3Csvg viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' rx='50' fill='%23FF0D75'/%3E%3Cg clip-path='url(%23clip0_283_2788)'%3E%3Cpath d='M39.4653 77.5455L19.0089 40.02L35.5411 22.2805L55.9975 59.806L39.4653 77.5455Z' stroke='white' stroke-width='10'/%3E%3Cpath d='M66.0253 77.8531L45.569 40.3276L62.1012 22.5882L82.5576 60.1136L66.0253 77.8531Z' stroke='white' stroke-width='10'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_283_2788'%3E%3Crect width='100' height='56' fill='white' transform='translate(0 22)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    symbol: "WBTC",
    name: "Wrapped BTC",
    image:
      "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Ccircle fill='%23201A2D' cx='16' cy='16' r='16'/%3E%3Cg fill='%23FFF'%3E%3Cpath d='M22.818 9.586l-.6.6a8.494 8.494 0 010 11.464l.6.6a9.352 9.352 0 000-12.678v.014zM10.2 9.638a8.494 8.494 0 0111.464 0l.6-.6a9.352 9.352 0 00-12.678 0l.614.6zm-.562 12.018a8.494 8.494 0 010-11.458l-.6-.6a9.352 9.352 0 000 12.678l.6-.62zm12.018.554a8.494 8.494 0 01-11.464 0l-.6.6a9.352 9.352 0 0012.678 0l-.614-.6zm-1.942-8.286c-.12-1.252-1.2-1.672-2.566-1.8V10.4h-1.056v1.692h-.844V10.4H14.2v1.736h-2.142v1.13s.78-.014.768 0a.546.546 0 01.6.464v4.752a.37.37 0 01-.128.258.366.366 0 01-.272.092c.014.012-.768 0-.768 0l-.2 1.262h2.122v1.764h1.056V20.12h.844v1.73h1.058v-1.744c1.784-.108 3.028-.548 3.184-2.218.126-1.344-.506-1.944-1.516-2.186.614-.302.994-.862.908-1.778zm-1.48 3.756c0 1.312-2.248 1.162-2.964 1.162v-2.328c.716.002 2.964-.204 2.964 1.166zm-.49-3.28c0 1.2-1.876 1.054-2.472 1.054v-2.116c.596 0 2.472-.188 2.472 1.062z'/%3E%3Cpath d='M15.924 26.852C9.89 26.851 5 21.959 5 15.925 5 9.892 9.892 5 15.925 5c6.034 0 10.926 4.89 10.927 10.924a10.926 10.926 0 01-10.928 10.928zm0-21c-5.559.004-10.062 4.513-10.06 10.072.002 5.559 4.51 10.064 10.068 10.064 5.559 0 10.066-4.505 10.068-10.064A10.068 10.068 0 0015.924 5.852z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  },
  {
    name: "Wrapped Ether",
    symbol: "WETH",
    image:
      "https://cdn.discordapp.com/attachments/989600709957808180/1052020642012221470/a412fe82bd2c11eb8d1e0242ac130005.png",
  },
  {
    name: "Utopia",
    symbol: "UTO",
    image:
      "data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='-40 -40 600 600'%3E%3Cdefs%3E%3Cstyle%3E .cls-1%7Bfill:%239f9f9f%7D.cls-2%7Bfill:%23fefefe%7D.cls-4%7Bfill:%23030303%7D %3C/style%3E%3C/defs%3E%3Cpath d='M371.65 15v23.92l-.47.71C368.82 41.48 366 41 363.36 41q-36.94.09-73.88 0h-176c-3.06 0-6.31.67-9.1-1.37l-.47-.71V15ZM55.21 355.33H31.66a2.81 2.81 0 0 1-.26-.3.82.82 0 0 1-.13-.37v-24H6.67V136.41h24.6l.69.44c2 2.64 1.38 5.75 1.39 8.67q.07 73.11 0 146.2c0 12.44.26 12.68 12.64 12.76 3 0 6-.29 8.85 1a3 3 0 0 1 1.23 1.1 12.38 12.38 0 0 1 1.18 6.17q.1 18 0 36.05c0 2.09.17 4.28-1.36 6.06ZM420.4 452.82v23.51c-3.87.66-178.64.93-195 .29v-23.8l.47-.71c2.79-2 6-1.37 9.1-1.37q75.33-.09 150.68 0c9.25 0 18.49-.06 27.74 0 2.25 0 4.6-.25 6.54 1.37ZM176.66 428H128v-23.83H79.16v-24.9l.39-.66c1.9-1.69 4.27-1.4 6.51-1.42 10.55-.08 21.09 0 31.63-.05 6.6-.05 7.89-1.5 8.12-8.1.16-4.52-.77-9.14 1.06-13.53a2.94 2.94 0 0 1 1.1-1.14 58.19 58.19 0 0 1 24.44-.12 3 3 0 0 1 1.2 1.07c1.29 2.36 1.19 4.95 1.2 7.5v30.75c.05 6.74 1.61 8.24 8.36 8.37 3.7.08 7.41-.1 11.1.23 2.23.2 3.9 1.14 4.1 3.54a107.23 107.23 0 0 1-.06 20 3.93 3.93 0 0 1-1 1.85c-.2.17-.43.31-.65.44Z'/%3E%3Cpath d='M225.4 452.82h-48.74V428c1.46-1.94 3.61-2 5.74-2.06 6.36-.1 12.72-.14 19.08.09 6.33-.23 12.67-.21 19-.07 1.93 0 4-.19 5.56 1.42 2.71 7.57 1.34 15.33 1 23-.04 1.09-.97 1.72-1.64 2.44ZM31.27 136.41V87.67h23.94l.7.45c1.36 1.51 1.34 3.39 1.35 5.22q.18 18.9 0 37.8a11.41 11.41 0 0 1-1 5 3.12 3.12 0 0 1-1.12 1.24c-7.1 2.15-14.32 1.17-21.51.74-1.03-.12-1.63-1.04-2.36-1.71Z'/%3E%3Cpath d='M55.21 87.67v-24.8h23.95l.69.44a3.53 3.53 0 0 1 1 1.84c.36 7.46 1.36 14.94-.69 22.33A3 3 0 0 1 79 88.65c-7.08 2-14.25 1.13-21.4.67-1.07-.06-1.67-.99-2.39-1.65ZM469.14 404.07V428h-24.8l-.71-.47a5.34 5.34 0 0 1-1.24-3.54q-.37-8.07 0-16.15a7 7 0 0 1 1.61-4.3 8.54 8.54 0 0 1 5.24-1.52c5-.13 10-.14 15 0 1.86.09 3.65.41 4.9 2.05Z'/%3E%3Cpath d='M79.16 62.87V38.92H104c.79.8 1.71 1.56 1.76 2.78.29 7 1.2 14-.69 20.86a3 3 0 0 1-1.13 1.23C96.52 66 89 64.92 81.56 64.53c-1.07-.06-1.68-1-2.4-1.66ZM444.34 428v24.8H420.4c-.67-.72-1.62-1.34-1.66-2.38-.33-7.7-1.67-15.44 1-23 1.15-1.33 2.78-1.33 4.32-1.4 5.11-.22 10.23-.18 15.35 0 1.9.03 3.68.36 4.93 1.98ZM79.16 379.27H55.21v-23.94c.52-.48.95-1.21 1.63-1.34a70.78 70.78 0 0 1 21.55-.16c1.55.19 2.36 1.57 2.5 3.09a109.82 109.82 0 0 1 0 19.53 4.76 4.76 0 0 1-1.73 2.82ZM444.34 111.61h24.8v73.54c-1.36 1.8-3.33 2-5.35 2-5 .13-9.94.18-14.9 0-5.5-.2-6.49-1.05-6.55-6.57-.18-14.62-.28-29.24.06-43.86-.24-6.35-.22-12.7-.12-19.06 0-2-.09-4 1.36-5.63ZM395.59 62.87h24.81v24.8c-.15.23-.3.46-.44.69a3.62 3.62 0 0 1-1.84 1c-7.43.4-14.88 1.3-22.25-.61a3 3 0 0 1-1.2-1.1c-1.72-8.12-2.21-16.24.23-24.32Z'/%3E%3Cpath d='M420.4 87.67h23.94v23.94c-.79.79-1.55 1.71-2.77 1.76-7 .29-14 1.2-20.87-.69a3.11 3.11 0 0 1-1.23-1.13c-2.14-7.1-1.16-14.3-.74-21.49.07-1.06 1-1.67 1.67-2.39ZM371.65 38.92h23.94v23.95c-.79.79-1.55 1.7-2.77 1.75-7 .3-14 1.2-20.87-.68a3.18 3.18 0 0 1-1.23-1.13c-2.13-7.1-1.16-14.31-.73-21.49.06-1.07 1.01-1.67 1.66-2.4Z'/%3E%3Cpath class='cls-1' d='M371.65 38.92v23.95c-.9 1.57-2.44 1.81-4 2-1.85.17-3.7.15-5.55.15q-124.27 0-248.55-.06c-3.25 0-6.93 1.15-9.57-2.05V38.92Z'/%3E%3Cpath class='cls-2' d='M104 62.87h267.65c1.92 1.47 2 3.6 2.07 5.74.1 3.68-.12 7.36.14 11 .28 4.05 1.77 5.54 5.81 5.83 3.53.25 7.07 0 10.6.14 2 .07 4 .3 5.32 2.07 1.93 1.47 2 3.6 2.08 5.74.11 3.53-.09 7.07.15 10.6.23 3.35 2 5.16 5.38 5.38 3.82.24 7.64 0 11.45.15 2.15.06 4.28.15 5.75 2.07 1.92 1.47 2 3.6 2.07 5.75.1 3.67-.12 7.35.13 11 .28 4 1.78 5.54 5.82 5.83 3.53.25 7.07 0 10.6.14 2 .06 4 .29 5.32 2.06v48.74h24.8v72.69c-1.25 1.62-3 2-4.92 2-3 .11-6 .06-9 .08-7.41.08-8.77 1.36-8.79 8.67-.05 14.34 0 28.68 0 43 0 3.27-.09 6.54 0 9.8.21 5.2 1.79 6.74 7.07 6.93 3.4.12 6.81 0 10.22.09 2 .06 4 .29 5.35 2.06v24.8c-1.45 1.93-3.59 2-5.71 2.05-6.32.1-12.64.16-19-.11-8 .24-16 .29-24 0-6.61.26-13.22.21-19.84.11a11 11 0 0 1-4.52-.85 3.53 3.53 0 0 1-1.28-.81c-1.44-2.28-1.36-4.85-1.38-7.4 0-3.11.09-6.23-.06-9.34-.22-4.62-1.65-6.06-6.2-6.29a67.32 67.32 0 0 0-7.65 0c-4.07.28-5.5 1.71-5.74 5.85-.22 3.68 0 7.37-.11 11.05-.06 2.4-.11 4.83-1.82 6.81-4.08 1.73-8.36.85-12.56 1s-8.19.09-12.28-.15c-6.36.26-12.72.22-19.08.12a11 11 0 0 1-4.54-.85 3.47 3.47 0 0 1-1.28-.82c-1.36-2.15-1.35-4.57-1.37-7 0-3.26.09-6.53-.07-9.79-.22-4.59-1.67-6-6.26-6.25-2.4-.12-4.82-.09-7.23 0-5.4.14-6.83 1.53-7 6.83-.11 3.54 0 7.09-.08 10.63-.07 2.27-.19 4.55-1.89 6.36-2.12 1.1-4.43.92-6.69.92q-29.41.09-58.84 0c-2.41 0-4.85.08-7.08-1.09-2.15-1.51-2.23-3.84-2.31-6.12-.14-3.56 0-7.12-.09-10.68-.17-5.33-1.6-6.72-7-6.86-2.13-.06-4.27-.09-6.41 0-4.58.25-6 1.68-6.19 6.35-.18 5.55.05 11.11-.27 16.67.34 6.24.22 12.48.14 18.72a11 11 0 0 1-1 4.55 2.94 2.94 0 0 1-1 1.19c-7.82 2.28-15.77 1.2-23.67.74-2.42-.14-2.95-2.34-3.11-4.45-.3-4 0-8-.22-11.93-.23-5.19-1.87-6.82-7-7-3.12-.14-6.25 0-9.38-.11-2-.07-4-.27-5.36-2.05-1.78-1.35-2-3.28-2.07-5.32-.09-3.82.1-7.65-.12-11.46-.24-4.14-1.67-5.57-5.75-5.83a69.87 69.87 0 0 0-8.92 0c-4.09.26-5.51 1.69-5.75 5.83-.23 3.81 0 7.64-.12 11.46 0 2-.29 4-2.07 5.32-.52.48-1 1.22-1.62 1.35a70.79 70.79 0 0 1-21.6.17c-2.15-.26-2.53-2.44-2.67-4.35-.32-4.26 0-8.53-.23-12.78-.22-5.2-1.85-6.83-7-7-4.26-.17-8.52 0-12.78-.2-3.1-.17-4.62-1.69-4.78-4.79-.22-4 0-8-.21-11.93-.23-5.18-1.86-6.8-7-7-3.12-.14-6.25 0-9.38-.11-2-.07-4-.28-5.36-2.05a5.39 5.39 0 0 1-2-4.1c-.09-1.71-.14-3.41-.14-5.12V145.58c0-3.16-.87-6.66 2.07-9.22 1.37-1.78 3.35-2 5.37-2 3.14-.11 6.27 0 9.4-.11 5.22-.22 6.91-1.8 7-7 .18-10.54 0-21.07.1-31.61 0-2.78-.52-5.79 2.08-7.93 1.47-1.93 3.6-2 5.74-2.08 3.68-.1 7.36.13 11-.13 4-.29 5.54-1.78 5.82-5.83.26-3.66 0-7.34.14-11 .15-2.2.21-4.33 2.21-5.8ZM469.14 404.07h-24.8l-.71-.47a5.84 5.84 0 0 1-1.28-3.92c-.19-5.76-.23-11.51 0-17.26.07-1.4.18-2.84 1.39-3.84 7.57-2.59 15.3-1.31 23-1 1 0 1.66 1 2.37 1.65Z'/%3E%3Cpath class='cls-1' d='M469.14 379.27h-24.8c-1.66-.8-1.87-2.36-1.95-3.92-.26-5.33-.25-10.66 0-16a5.23 5.23 0 0 1 1.95-4h24.8Z'/%3E%3Cpath d='M469.14 330.53h-24.36c-.65-3.68-.88-58.4-.29-72.69h24.65Z'/%3E%3Cpath class='cls-1' d='M55.21 136.41v170.18H31.72a2.76 2.76 0 0 1-.3-.29.64.64 0 0 1-.15-.36V136.41Z'/%3E%3Cpath d='M55.21 306.59H78.7a1.67 1.67 0 0 1 .31.28.73.73 0 0 1 .14.36v23.15h24.21a4.48 4.48 0 0 1 .45.45.8.8 0 0 1 .14.36v24.14h24v23.94H79.16v-23.94H55.21Z' fill='%23a1a1a1'/%3E%3Cpath class='cls-1' d='M420.4 428v24.8h-195V428c.7-1.53 2.11-1.78 3.55-1.94a48.57 48.57 0 0 1 5.12-.17h177.66c2.95.11 6.36-.98 8.67 2.11ZM152.71 355.33h23.49a1.72 1.72 0 0 1 .31.29.7.7 0 0 1 .14.36v23.29h24.8c2 1.24 2 3.31 2 5.26q.24 19.08 0 38.16c0 2-.25 4-2 5.33h-24.8v-23.5a1.7 1.7 0 0 0-.3-.3.62.62 0 0 0-.36-.14h-23.28Z'/%3E%3Cpath class='cls-1' d='M127.91 355.33V331a1.64 1.64 0 0 1 .29-.3.62.62 0 0 1 .36-.14h24.15v24.8Z'/%3E%3Cpath class='cls-2' d='M201.46 428v-48.73c1.48-1.95 3.64-2 5.79-2 6-.09 11.95-.17 17.92.12 7-.27 14-.31 20.93-.08 5.06.17 5.88 1.07 6.13 6.13.21 4-.06 8 .17 12 .27 4.69 1.92 6.25 6.65 6.56 11.72.77 13-.4 13-12.27 0-12.46 0-12.47 12.37-12.48h30.76c2.41 0 4.86-.13 7.15.88a3.53 3.53 0 0 1 1.27.77c2.32 4.12 1.32 8.63 1.39 13 .15 9.66.55 10.16 10.16 10.16h.85c7.68 0 8.7-1 8.75-8.55v-8.54a11.49 11.49 0 0 1 1.24-5.78 3 3 0 0 1 1.23-1 13.24 13.24 0 0 1 5.42-.92c14.31 0 28.63-.21 42.94.11 6.25-.24 12.51-.16 18.76-.12a14.32 14.32 0 0 1 6.23 1.14c1.93 1.13 1.76 3.1 1.84 4.9.2 4 0 7.93.14 11.88.2 5 1.73 6.58 6.68 6.8 3.26.15 6.51 0 9.77.1 2 .07 4 .29 5.33 2.06V428H201.46Z'/%3E%3Cpath class='cls-1' d='M79.16 87.67v48.74H55.21V87.67ZM104 62.87v24.8H79.16v-24.8ZM444.34 136.41H420.4v-24.8h23.94ZM395.59 87.67h-23.94v-24.8h23.94ZM420.4 111.61h-24.81V87.67h24.81Z'/%3E%3Cpath d='M322.9 379.27h-48.27a2.07 2.07 0 0 0-.31.27.68.68 0 0 0-.16.36v24h-23.67c.06.06-.06 0-.14-.14a.7.7 0 0 1-.14-.36v-24.15H225.4c-.46-.52-1.24-.92-1.33-1.59-.92-7.32-1.93-14.66.63-21.89l.7-.46h72.7c4-3.06 20.75-3.06 24.8 0 3.1 4.03 3.1 20.08 0 23.96ZM274.15 257.84H225.4V209.1c1.37-1.8 3.35-2 5.37-2q19-.19 38 0c2 0 4 .24 5.37 2 1.8 1.36 2 3.34 2 5.37q.19 19 0 38c.03 2.03-.14 4.01-1.99 5.37ZM395.59 257.84h-48.74V209.1c1.36-1.8 3.34-2 5.36-2q19-.19 38 0c2 0 4 .24 5.37 2 1.81 1.36 2 3.34 2 5.37q.21 19 0 38c.03 2.03-.18 4.01-1.99 5.37Z'/%3E%3Cpath class='cls-1' d='M395.59 257.84V209.1H420c.64 3.58.85 35.66.29 48.74Z'/%3E%3Cpath d='M444.34 404.07H420.4v-24.8c-3-4-3-19.92 0-23.94h23.94v48.74ZM395.59 379.27h-48.74c-.36-.45 0 .24-.35-.23-2.73-3.92-2.49-20 .35-23.71h24.8c4-3 19.93-3 23.94 0 3.04 4.02 3.04 19.93 0 23.94Z'/%3E%3Cpath class='cls-1' d='M274.15 209.1H225.4v-23.5c3.58-.64 35.65-.85 48.75-.3ZM395.59 209.1h-48.74v-23.5c3.58-.64 35.65-.85 48.74-.3ZM274.15 257.84V209.1h23.5c.64 3.58.85 35.65.3 48.74ZM322.9 355.33h-24.8V331a1.64 1.64 0 0 1 .29-.3.62.62 0 0 1 .36-.14h24.15ZM395.59 355.33h-23.94V331a1.64 1.64 0 0 1 .29-.3.62.62 0 0 1 .36-.14h23.29Z'/%3E%3Cpath d='M201.46 355.33V331a1.64 1.64 0 0 1 .29-.3.62.62 0 0 1 .36-.14h23.29v24.8c-4.01 3-19.93 3-23.94-.03Z'/%3E%3Cpath class='cls-1' d='M127.78 136.53v23.73h-23.64v-23.73ZM346.85 355.33v23.94c-4 3-19.93 3-24 0v-23.94ZM152.83 111.49V87.76h23.64v23.73Z'/%3E%3Cpath d='M322.9 379.27h24v24.35a2.07 2.07 0 0 1-.29.3.67.67 0 0 1-.37.15H322.9Z'/%3E%3Cpath class='cls-1' d='M127.79 136.27V111.7h24.91v24.57ZM201.45 379.25v-23.91h23.94v23.91ZM395.57 379.25v-23.91h24.86v23.91Z'/%3E%3Cpath class='cls-4' d='M469.17 404.08v-73.61h23.92v73.61ZM469.17 257.76v-72.61h23.92v72.61Z'/%3E%3C/svg%3E%0A",
  },
  {
    symbol: "REF",
    name: "Ref Finance Token",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='16 24 248 248' style='background: %23000'%3E%3Cpath d='M164,164v52h52Zm-45-45,20.4,20.4,20.6-20.6V81H119Zm0,18.39V216h41V137.19l-20.6,20.6ZM166.5,81H164v33.81l26.16-26.17A40.29,40.29,0,0,0,166.5,81ZM72,153.19V216h43V133.4l-11.6-11.61Zm0-18.38,31.4-31.4L115,115V81H72ZM207,121.5h0a40.29,40.29,0,0,0-7.64-23.66L164,133.19V162h2.5A40.5,40.5,0,0,0,207,121.5Z' fill='%23fff'/%3E%3Cpath d='M189 72l27 27V72h-27z' fill='%2300c08b'/%3E%3C/svg%3E%0A",
  },
  {
    symbol: "OCT",
    name: "Octopus Network Token",
    image:
      "data:image/svg+xml,%3Csvg version='1.1' id='O' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 113.39 113.39' style='enable-background:new 0 0 113.39 113.39;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23014299;%7D .st1%7Bfill:%23FFFFFF;%7D %3C/style%3E%3Ccircle class='st0' cx='56.69' cy='56.69' r='56.69'/%3E%3Cg%3E%3Cpath class='st1' d='M44.25,59.41c-1.43,0-2.59,1.16-2.59,2.59v20.28c0,1.43,1.16,2.59,2.59,2.59c1.43,0,2.59-1.16,2.59-2.59V62 C46.84,60.57,45.68,59.41,44.25,59.41z'/%3E%3Cpath class='st1' d='M56.69,59.41c-1.45,0-2.62,1.17-2.62,2.62v26.47c0,1.45,1.17,2.62,2.62,2.62s2.62-1.17,2.62-2.62V62.02 C59.31,60.58,58.14,59.41,56.69,59.41z'/%3E%3Cpath class='st1' d='M79.26,78.87c-0.33,0.15-0.64,0.28-0.95,0.38c0,0-0.01,0-0.01,0c-0.59,0.19-1.13,0.29-1.63,0.31h-0.06 c-1,0.03-1.84-0.27-2.59-0.75c-0.49-0.32-0.91-0.73-1.25-1.23c-0.3-0.43-0.53-0.93-0.71-1.51c0-0.01-0.01-0.02-0.01-0.03 c-0.22-0.74-0.34-1.61-0.34-2.59V62.02c0-1.45-1.17-2.62-2.62-2.62c-1.45,0-2.62,1.17-2.62,2.62v11.43c0,4.5,1.64,8.03,4.63,9.96 c1.5,0.97,3.21,1.45,5.04,1.45c1.68,0,3.45-0.41,5.25-1.22c1.32-0.59,1.9-2.14,1.31-3.46C82.13,78.86,80.57,78.27,79.26,78.87z'/%3E%3Cpath class='st1' d='M68.33,45.9c0-2.15-1.75-3.9-3.9-3.9c-2.15,0-3.9,1.75-3.9,3.9s1.75,3.9,3.9,3.9 C66.58,49.8,68.33,48.05,68.33,45.9z'/%3E%3Cpath class='st1' d='M48.96,41.99c-2.15,0-3.9,1.75-3.9,3.9s1.75,3.9,3.9,3.9s3.9-1.75,3.9-3.9S51.11,41.99,48.96,41.99z'/%3E%3Cpath class='st1' d='M56.69,22.28c-15.17,0-27.52,12.34-27.52,27.52v15.09c0,1.46,1.18,2.64,2.64,2.64s2.64-1.18,2.64-2.64V49.8 c0-12.26,9.98-22.24,22.24-22.24c12.26,0,22.24,9.98,22.24,22.24v15.09c0,1.46,1.18,2.64,2.64,2.64s2.64-1.18,2.64-2.64V49.8 C84.21,34.62,71.87,22.28,56.69,22.28z'/%3E%3C/g%3E%3C/svg%3E",
  },
  {
    symbol: "SOL",
    name: "Solana",
    image:
      "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHdpZHRoPSIxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1MCIgeDI9IjUwIiB5MT0iMjciIHkyPSI3NCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMTRlNmFkIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYTk2NGRlIi8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9ImIiPjxwYXRoIGQ9Im0wIDBoMTAwdjEwMGgtMTAweiIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI2IpIj48cGF0aCBkPSJtNTAgMGM5Ljg4OTEgMCAxOS41NTYxIDIuOTMyNDUgMjcuNzc4NSA4LjQyNjUyIDguMjIyNSA1LjQ5NDA4IDE0LjYzMTEgMTMuMzAyOTggMTguNDE1NSAyMi40MzkyOHM0Ljc3NSAxOS4xODk3IDIuODQ1MyAyOC44ODg3Yy0xLjkyOTMgOS42OTkxLTYuNjkxMyAxOC42MDgyLTEzLjY4NCAyNS42MDA4LTYuOTkyNiA2Ljk5MjctMTUuOTAxNyAxMS43NTQ3LTI1LjYwMDggMTMuNjg0LTkuNjk5IDEuOTI5Ny0xOS43NTI0LjkzOTEtMjguODg4Ny0yLjg0NTNzLTE2Ljk0NTItMTAuMTkzLTIyLjQzOTI4LTE4LjQxNTVjLTUuNDk0MDctOC4yMjI0LTguNDI2NTItMTcuODg5NC04LjQyNjUyLTI3Ljc3ODUgMC0xMy4yNjA4IDUuMjY3ODQtMjUuOTc4NSAxNC42NDQ3LTM1LjM1NTMgOS4zNzY4LTkuMzc2ODYgMjIuMDk0NS0xNC42NDQ3IDM1LjM1NTMtMTQuNjQ0N3oiIGZpbGw9IiMwMDAiLz48ZyBmaWxsPSJ1cmwoI2EpIiBmaWxsLW9wYWNpdHk9Ii45MiI+PHBhdGggZD0ibTMwLjM4MDYgNjIuNzg4OWMuMzEzMS0uMzIzNC44MzQ5LS41MzkgMS4zNTY3LS41MzloNDYuMjMwN2MuODM0OSAwIDEuMjUyMyAxLjA3NzkuNjI2MiAxLjcyNDdsLTkuMTgzNiA5LjQ4NjRjLS4zMTMuMzIzNC0uODM0OC41MzktMS4zNTY2LjUzOWgtNDYuMTI2NGMtLjgzNDggMC0xLjI1MjItMS4wNzgtLjYyNjEtMS43MjQ4eiIvPjxwYXRoIGQ9Im0zMC4zODA2IDI3LjUzOWMuMzEzMS0uMzIzNC44MzQ5LS41MzkgMS4zNTY3LS41MzloNDYuMjMwN2MuODM0OSAwIDEuMjUyMyAxLjA3OC42MjYxIDEuNzI0OGwtOS4xODM1IDkuNDg2M2MtLjMxMzEuMzIzNC0uODM0OC41MzktMS4zNTY2LjUzOWgtNDYuMTI2NGMtLjgzNDkgMC0xLjI1MjMtMS4wNzgtLjYyNjEtMS43MjQ4eiIvPjxwYXRoIGQ9Im02OS41MTUgNDUuMDAxOGMtLjMxMzEtLjMyMzQtLjgzNDktLjUzOS0xLjM1NjctLjUzOWgtNDYuMjMwN2MtLjgzNDggMC0xLjI1MjIgMS4wNzgtLjYyNjEgMS43MjQ4bDkuMTgzNSA5LjQ4NjRjLjMxMzEuMzIzMy44MzQ5LjUzODkgMS4zNTY3LjUzODloNDYuMjMwNmMuODM0OSAwIDEuMjUyNC0xLjA3OC42MjYyLTEuNzI0OHoiLz48L2c+PC9nPjwvc3ZnPg==",
  },
  {
    symbol: "USDT.e",
    name: "Tether USD",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='16' cy='16' r='16' fill='%2326A17B'/%3E%3Cpath fill='%23FFF' d='M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117'/%3E%3C/g%3E%3C/svg%3E",
  },
  {
    symbol: "STNEAR",
    name: "Staked NEAR",
    image:
      "data:image/svg+xml,%3csvg width='96' height='96' viewBox='0 0 96 96' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='96' height='96' rx='48' fill='white'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M48.0006 20L41.2575 26.7431L48.0006 33.4862L54.7437 26.7431L48.0006 20ZM37.281 30.7188L30.7144 37.2853L47.9998 54.5707L65.2851 37.2853L58.7186 30.7188L47.9998 41.4376L37.281 30.7188ZM26.7384 41.261L19.9953 48.0041L47.9995 76.0083L76.0037 48.0041L69.2606 41.2611L47.9995 62.5221L26.7384 41.261Z' fill='%23231B51'/%3e%3c/svg%3e",
  },
  {
    symbol: "PEM",
    name: "PembRock",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cGF0aCBmaWxsPSIjMUUxRTFGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTMuMiAxNzAuNDJhODMuNTEgODMuNTEgMCAwIDAgNzAuNy04Mi42IDgzLjUgODMuNSAwIDAgMC01Ljc4LTMwLjYxbDEzLjY4LTIzLjg3aC0yOC4wOGE4My4xIDgzLjEgMCAwIDAtNjMuMi0yOS4wNiA4My4xIDgzLjEgMCAwIDAtNjMuMiAyOS4wNkg4LjU4TDIyLjcgNTcuNzhhODMuNSA4My41IDAgMCAwLTUuNTUgMzAuMDUgODMuNTEgODMuNTEgMCAwIDAgNzAuNiA4Mi41N2wxMi43NyAyMi4xMSAxMi42Ny0yMi4xWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0iI0VBRUNFRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAwLjUzIDcuOTJBNzguNjYgNzguNjYgMCAwIDAgNDAuNjEgMzUuNmwtMS4xOCAxLjE3SDE2LjY1TDI4LjIzIDU3LjFsLS42OCAxLjc3Yy0zLjQgOC44Ny02LjA3IDE4LjEtNi4wNyAyOC4yIDAgMzkuNzcgMjkuMDMgNzMuMTQgNjYuOTQgNzlsMS44Ni4zIDEwLjM0IDE3Ljc5IDEwLjA2LTE3Ljc4IDEuODctLjNjMzcuOTUtNS44MSA2Ny4wMy0zOC44IDY3LjAzLTc4LjYxIDAtMTAuMy0yLjI0LTIwLjEzLTUuNzgtMjkuMTVsLS42OS0xLjc4IDExLjE4LTE5Ljc3aC0yMi42NWwtMS4xOC0xLjE3YTc4LjY2IDc4LjY2IDAgMCAwLTU5LjkzLTI3LjY3Wk0zNS44NCAyOS4wNEE4Ni40OCA4Ni40OCAwIDAgMSAxMDAuNTQgMGE4Ni40OCA4Ni40OCAwIDAgMSA2NC42OCAyOS4wNGgzMi42N0wxODEuODEgNTcuMmMzLjQ2IDkuNDMgNS42NSAxOS42MyA1LjY1IDMwLjI2IDAgNDMuMTItMzEuMDIgNzguOTUtNzEuODMgODYuMTRMMTAwLjY1IDIwMGwtMTUuMy0yNi40MmMtNDAuNzctNy4yMy03MS43NC00My40NC03MS43NC04Ni41MyAwLTEwLjQgMi42Mi0xOS45OSA1LjkzLTI5LjI1TDMgMjkuMDRoMzIuODRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsPSIjRjY4MjFGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0zMS44NSA0NS40MSA2OC43NSAxMjAuNDIgOC4wNi0xNC4xMi0yNy40Ny00OC4xM2gyNC4zTDcyLjMzIDQ1LjRIMzEuODVabTQ5LjE5IDAgNDQuMTUgNzcuMzIgNy42Ny0xMy40NC0yOC4xOC00OS4zNGg4LjM3bDIzLjk5IDQyLjAyTDE0NSA4OGwtMTYuMDItMjguMDVoMTYuNDJsLTQuNDMgNy43NiA3LjgxIDEzLjcgMjAuNTctMzZIODEuMDRaTTU2LjMgNTkuOTVsMTYuNjIgMjkuMTFoOC42N0w2NC45NyA1OS45NUg1Ni4zWk00NC4yIDg0LjZhNTYuNjUgNTYuNjUgMCAwIDAgMzEuMDUgNTQuMTJsNi4zMiAxMS4wMWE2NC40NSA2NC40NSAwIDAgMS00NS4yOS02MS43YzAtNC45Ny41Ni05LjggMS42LTE0LjQ0bDYuMzMgMTEuMDJabTc5LjY1LTQ3LjlhNTUuNDYgNTUuNDYgMCAwIDAtMjMuNjYtNS4yNyA1NS40NSA1NS40NSAwIDAgMC0yMy42NSA1LjI2SDYxLjVhNjMuMjYgNjMuMjYgMCAwIDEgMzguNy0xMy4xNmMxNC41NCAwIDI3Ljk1IDQuOSAzOC43IDEzLjE2aC0xNS4wNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGw9IiNGNjgyMUYiIGQ9Ik00NC4xIDg4LjAyYzAtMS4xNC4wNC0yLjI4LjEtMy40MWwtNi4zLTExLjAyYTY1LjI2IDY1LjI2IDAgMCAwLTEuNiAxNC40MyA2NC40NSA2NC40NSAwIDAgMCA0NS4yOCA2MS43MWwtNi4zMS0xMWE1Ni42NSA1Ni42NSAwIDAgMS0zMS4xNS01MC43Wm0xMTMuMTIgMGMwLTEuMTQtLjItMi4yOC0uMjctMy40MWw2LjI1LTExLjAyYTY1LjMxIDY1LjMxIDAgMCAxIDEuODQgMTQuNDMgNjQuNDUgNjQuNDUgMCAwIDEtNDUuMjkgNjEuNzFsNi4zMS0xMWE1Ni42NSA1Ni42NSAwIDAgMCAzMS4xNi01MC43WiIvPjwvc3ZnPg==",
  },
  {
    symbol: "USDC.e",
    name: "USD Coin",
    image:
      "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Ccircle cx='16' cy='16' r='16' fill='%232775C9'/%3E%3Cpath d='M15.75 27.5C9.26 27.5 4 22.24 4 15.75S9.26 4 15.75 4 27.5 9.26 27.5 15.75A11.75 11.75 0 0115.75 27.5zm-.7-16.11a2.58 2.58 0 00-2.45 2.47c0 1.21.74 2 2.31 2.33l1.1.26c1.07.25 1.51.61 1.51 1.22s-.77 1.21-1.77 1.21a1.9 1.9 0 01-1.8-.91.68.68 0 00-.61-.39h-.59a.35.35 0 00-.28.41 2.73 2.73 0 002.61 2.08v.84a.705.705 0 001.41 0v-.85a2.62 2.62 0 002.59-2.58c0-1.27-.73-2-2.46-2.37l-1-.22c-1-.25-1.47-.58-1.47-1.14 0-.56.6-1.18 1.6-1.18a1.64 1.64 0 011.59.81.8.8 0 00.72.46h.47a.42.42 0 00.31-.5 2.65 2.65 0 00-2.38-2v-.69a.705.705 0 00-1.41 0v.74zm-8.11 4.36a8.79 8.79 0 006 8.33h.14a.45.45 0 00.45-.45v-.21a.94.94 0 00-.58-.87 7.36 7.36 0 010-13.65.93.93 0 00.58-.86v-.23a.42.42 0 00-.56-.4 8.79 8.79 0 00-6.03 8.34zm17.62 0a8.79 8.79 0 00-6-8.32h-.15a.47.47 0 00-.47.47v.15a1 1 0 00.61.9 7.36 7.36 0 010 13.64 1 1 0 00-.6.89v.17a.47.47 0 00.62.44 8.79 8.79 0 005.99-8.34z' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E",
  },
  {
    symbol: "DAI",
    name: "Dai Stablecoin",
    image:
      "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle fill='%23F4B731' fill-rule='nonzero' cx='16' cy='16' r='16'/%3E%3Cpath d='M9.277 8h6.552c3.985 0 7.006 2.116 8.13 5.194H26v1.861h-1.611c.031.294.047.594.047.898v.046c0 .342-.02.68-.06 1.01H26v1.86h-2.08C22.767 21.905 19.77 24 15.83 24H9.277v-5.131H7v-1.86h2.277v-1.954H7v-1.86h2.277V8zm1.831 10.869v3.462h4.72c2.914 0 5.078-1.387 6.085-3.462H11.108zm11.366-1.86H11.108v-1.954h11.37c.041.307.063.622.063.944v.045c0 .329-.023.65-.067.964zM15.83 9.665c2.926 0 5.097 1.424 6.098 3.528h-10.82V9.666h4.72z' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E",
  },
];

export const AvaiableTokens = () => {
  return (
    <section
      id="available_tokens"
      className="items-center text-center px-8 text-white py-32 relative"
    >
      <LeftWhiteStar></LeftWhiteStar>
      <RightWhiteStar></RightWhiteStar>
      <AvaiableTokensAsset></AvaiableTokensAsset>

      <h2 className=" font-extrabold text-fS32px text-center pt-12 pb-22">
        Our <span className="text-purple my-4"> available tokens</span>
      </h2>

      <div className="my-24 lg:mx-44 flex flex-col justify-center md:justify-between grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 lg:gap-x-0 gap-5 gap-y-5">
        {tokens.map(({ name, image, symbol }) => (
          <div
            key={`avaialble-token-` + name}
            className="bg-black bg-opacity-60 shadow-how_to_use_shadow rounded-lg flex inline-flex items-center justify-center lg:w-10/12  p-4 z-50"
          >
            <img
              loading="lazy"
              src={image}
              alt={name}
              className="h-[42px] rounded-full"
            />
            <p className="font-medium text-3xl px-4">{symbol}</p>
          </div>
        ))}
      </div>
      {/*<ButtonavAilableTokens></ButtonavAilableTokens>*/}
    </section>
  );
};

export default AvaiableTokens;
