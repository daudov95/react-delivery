import React from 'react'
import logo from '../assets/img/header/logo.svg'
import appstore from '../assets/img/footer/app/appstore.svg'
import googleplay from '../assets/img/footer/app/googleplay.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrap">
                    <div className="footer__row">
                        <div className="footer__col">
                            <img src={logo} alt="Delivery Grozny" />
                        </div>
                        <div className="footer__col">
                            <ul className='footer-menu'>
                                <li className='footer-menu__link'><a href="#">Для ресторанов</a></li>
                                <li className='footer-menu__link'><a href="#">Курьерам</a></li>
                                <li className='footer-menu__link'><a href="#">Информация о доставке</a></li>
                                <li className='footer-menu__link'><a href="#">Условия акций</a></li>
                                <li className='footer-menu__link'><a href="#">Контакты</a></li>
                            </ul>
                        </div>
                        <div className="footer__col">
                            <div className="footer-app">
                                <h4 className="footer-app__title">Заказывайте с телефона</h4>

                                <ul className="footer-app-list">
                                    <li className='footer-app-list__link'><a href="#"><img src={appstore} alt="App Store" /></a></li>
                                    <li className='footer-app-list__link'><a href="#"><img src={googleplay} alt="Google Play" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__col">
                            <div className="footer-social">
                                <h4 className="footer-social__title">Присоединяйтесь к нам</h4>

                                <ul className="footer-social-list">
                                    <li className="footer-social-list__link">
                                        <a href="#">
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.947998 7.31792L4.85638 8.77528L6.37998 13.6773C6.44622 14.0085 6.84368 14.0748 7.10866 13.876L9.29469 12.0875C9.49342 11.8887 9.82464 11.8887 10.0896 12.0875L13.998 14.9359C14.263 15.1347 14.6604 15.0022 14.7267 14.6709L17.6414 0.759808C17.7076 0.428591 17.3764 0.0973761 17.0452 0.229863L0.947998 6.45676C0.550537 6.58924 0.550537 7.18543 0.947998 7.31792ZM6.18125 8.0466L13.8655 3.34331C13.998 3.27706 14.1305 3.4758 13.998 3.54204L7.70485 9.43771C7.50612 9.63645 7.30738 9.90142 7.30738 10.2326L7.10866 11.8225C7.10866 12.0212 6.77744 12.0875 6.71119 11.8225L5.91626 8.90776C5.71753 8.57655 5.85004 8.17908 6.18125 8.0466Z" fill="white"/>
                                            </svg>
                                        </a>
                                    </li>

                                    <li className="footer-social-list__link">
                                        <a href="#">
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.7378 3.25303C14.0585 1.57959 11.8195 0.649902 9.4561 0.649902C4.54268 0.649902 0.562194 4.61657 0.562194 9.51292C0.562194 11.0624 0.997561 12.6119 1.7439 13.9134L0.5 18.4999L5.22683 17.2603C6.53293 17.9421 7.96341 18.314 9.4561 18.314C14.3695 18.314 18.35 14.3473 18.35 9.45094C18.2878 7.15772 17.4171 4.92646 15.7378 3.25303ZM13.7476 12.6739C13.561 13.1697 12.6902 13.6655 12.2549 13.7275C11.8817 13.7895 11.3841 13.7895 10.8866 13.6655C10.5756 13.5416 10.1402 13.4176 9.64268 13.1697C7.40366 12.24 5.97317 10.0088 5.84878 9.82282C5.72439 9.69886 4.91585 8.64521 4.91585 7.52959C4.91585 6.41396 5.47561 5.91813 5.66219 5.67021C5.84878 5.4223 6.09756 5.4223 6.28415 5.4223C6.40854 5.4223 6.59512 5.4223 6.71951 5.4223C6.8439 5.4223 7.03049 5.36032 7.21707 5.79417C7.40366 6.22803 7.83902 7.34365 7.90122 7.40563C7.96341 7.52959 7.96341 7.65355 7.90122 7.77751C7.83902 7.90146 7.77683 8.02542 7.65244 8.14938C7.52805 8.27334 7.40366 8.45928 7.34146 8.52126C7.21707 8.64521 7.09268 8.76917 7.21707 8.95511C7.34146 9.20303 7.77683 9.8848 8.46098 10.5046C9.33171 11.2483 10.0159 11.4963 10.2646 11.6202C10.5134 11.7442 10.6378 11.6822 10.7622 11.5582C10.8866 11.4343 11.322 10.9384 11.4463 10.6905C11.5707 10.4426 11.7573 10.5046 11.9439 10.5666C12.1305 10.6285 13.25 11.1864 13.4366 11.3103C13.6854 11.4343 13.8098 11.4963 13.8719 11.5582C13.9341 11.7442 13.9341 12.178 13.7476 12.6739Z" fill="white"/>
                                            </svg>
                                        </a>
                                    </li>

                                    <li className="footer-social-list__link">
                                        <a href="#">
                                            <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.3355 9.34787C18.3355 9.2773 18.2649 9.2773 18.2649 9.20673C17.9826 8.64218 17.3475 7.93648 16.5007 7.16022C16.0773 6.80737 15.8655 6.52509 15.7244 6.38395C15.5127 6.10167 15.5127 5.88997 15.5833 5.60769C15.6538 5.39599 15.9361 5.04313 16.4301 4.408C16.7124 4.05516 16.8535 3.84345 17.0652 3.63175C18.1238 2.22036 18.6177 1.30295 18.4766 0.879529L18.4061 0.808966C18.3355 0.738397 18.2649 0.66783 18.1238 0.66783C17.9826 0.59726 17.7709 0.59726 17.5592 0.66783H14.8776C14.807 0.66783 14.807 0.66783 14.6659 0.66783C14.5953 0.66783 14.5247 0.66783 14.5247 0.66783H14.4542H14.3836L14.313 0.738393C14.2424 0.808962 14.2424 0.80896 14.2424 0.879529C13.9602 1.65579 13.6073 2.29092 13.2545 2.99661C13.0428 3.34946 12.8311 3.70232 12.6193 3.98459C12.4076 4.26687 12.2665 4.47858 12.1254 4.61971C11.9842 4.76085 11.8431 4.83142 11.7725 4.97256C11.7019 5.04313 11.5608 5.11371 11.5608 5.04314C11.4902 5.04314 11.4197 5.04313 11.4197 4.97256C11.3491 4.90199 11.2785 4.83142 11.208 4.76085C11.1374 4.69028 11.1374 4.54914 11.0668 4.408C11.0668 4.26686 11.0668 4.12573 11.0668 4.05516C11.0668 3.98459 11.0668 3.77289 11.0668 3.63175C11.0668 3.42004 11.0668 3.27889 11.0668 3.20832C11.0668 2.99662 11.0668 2.71434 11.0668 2.43207C11.0668 2.14979 11.0668 1.93807 11.0668 1.79693C11.0668 1.6558 11.0668 1.44409 11.0668 1.30295C11.0668 1.09124 11.0668 0.950099 11.0668 0.879529C11.0668 0.80896 10.9963 0.667825 10.9963 0.597256C10.9257 0.526686 10.8551 0.456115 10.7845 0.385545C10.714 0.314976 10.5728 0.314978 10.5023 0.244408C10.1494 0.173839 9.72601 0.103271 9.23202 0.103271C8.10291 0.103271 7.32664 0.173843 7.04436 0.314982C6.90322 0.385552 6.76208 0.456117 6.69151 0.597256C6.55038 0.738395 6.55037 0.808966 6.62094 0.808966C6.97379 0.879536 7.25607 1.02067 7.39721 1.23238L7.46778 1.37352C7.53835 1.44409 7.53834 1.58523 7.60891 1.79693C7.67948 2.00864 7.67948 2.22035 7.67948 2.50263C7.67948 2.92605 7.67948 3.34947 7.67948 3.63175C7.67948 3.98459 7.60891 4.1963 7.60891 4.408C7.60891 4.61971 7.53835 4.76086 7.46778 4.83143C7.39721 4.97256 7.39721 5.04314 7.32664 5.04314C7.32664 5.04314 7.32663 5.1137 7.25606 5.1137C7.18549 5.1137 7.11493 5.18427 6.97379 5.18427C6.90322 5.18427 6.76208 5.11371 6.69151 5.04314C6.55038 4.97257 6.40924 4.83143 6.33867 4.69029C6.19753 4.54915 6.05639 4.33743 5.91525 4.05516C5.77411 3.77288 5.56239 3.4906 5.42125 3.06719L5.28013 2.78491C5.20956 2.64378 5.06842 2.36149 4.92728 2.00865C4.78614 1.6558 4.645 1.37352 4.50386 1.02068C4.43329 0.879538 4.36273 0.808962 4.29216 0.738393H4.22158C4.22158 0.738393 4.15101 0.66783 4.08044 0.66783C4.00987 0.66783 3.93931 0.597256 3.86874 0.597256H1.32823C1.04595 0.597256 0.904815 0.667823 0.834246 0.738393L0.763672 0.808966C0.763672 0.808966 0.763672 0.879534 0.763672 0.950103C0.763672 1.02067 0.763676 1.09124 0.834246 1.23238C1.18709 2.07921 1.61051 2.92605 2.03392 3.77288C2.45734 4.54915 2.88076 5.25484 3.16304 5.74883C3.51589 6.24282 3.79816 6.7368 4.15101 7.16022C4.50386 7.58364 4.71556 7.86591 4.78613 8.00705C4.92727 8.14819 4.99783 8.21876 5.0684 8.28933L5.28013 8.50104C5.42126 8.64218 5.63297 8.85389 5.91525 9.06559C6.19752 9.2773 6.55037 9.48901 6.90321 9.70072C7.25606 9.91242 7.67949 10.0536 8.1029 10.1947C8.59689 10.3358 9.0203 10.4064 9.44372 10.3358H10.5023C10.714 10.3358 10.8551 10.2653 10.9963 10.1241L11.0668 10.0536C11.0668 9.98299 11.1374 9.983 11.1374 9.91243C11.1374 9.84186 11.1374 9.77129 11.1374 9.63015C11.1374 9.34787 11.1374 9.13617 11.208 8.92446C11.2785 8.71275 11.2785 8.57161 11.3491 8.43047C11.4197 8.28933 11.4902 8.21876 11.5608 8.14819C11.6314 8.07762 11.702 8.00705 11.702 8.00705H11.7725C11.9136 7.93648 12.1254 8.00705 12.2665 8.14819C12.4782 8.28933 12.6899 8.50104 12.831 8.71275C12.9722 8.92446 13.1839 9.13616 13.4662 9.41844C13.7485 9.70072 13.9602 9.91243 14.1013 9.983L14.313 10.1241C14.4542 10.1947 14.5953 10.2653 14.807 10.3358C15.0187 10.4064 15.1598 10.4064 15.301 10.4064L17.7004 10.3358C17.9121 10.3358 18.1238 10.2653 18.2649 10.1947C18.406 10.1241 18.4766 10.0536 18.4766 9.91243C18.4766 9.84186 18.4766 9.70072 18.4766 9.63015C18.3355 9.48901 18.3355 9.41844 18.3355 9.34787Z" fill="white"/>
                                            </svg>
                                        </a>
                                    </li>

                                    <li className="footer-social-list__link">
                                        <a href="#">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.5939 0.199951H2.25654C1.08942 0.199951 0.200195 1.08918 0.200195 2.2563V12.5936C0.200195 13.7607 1.08942 14.65 2.25654 14.65H12.5939C13.761 14.65 14.6502 13.7607 14.6502 12.5936V2.2563C14.6502 1.08918 13.761 0.199951 12.5939 0.199951ZM7.42519 11.76C9.815 11.76 11.7602 9.87033 11.7602 7.59168C11.7602 7.20264 11.7046 6.75803 11.5935 6.42457H12.8162V12.3157C12.8162 12.5936 12.5938 12.8715 12.2604 12.8715H2.59C2.31212 12.8715 2.03424 12.6492 2.03424 12.3157V6.36899H3.31251C3.20135 6.75803 3.14577 7.14707 3.14577 7.53611C3.0902 9.87034 5.03539 11.76 7.42519 11.76ZM7.42519 10.0926C5.86904 10.0926 4.64635 8.86995 4.64635 7.36937C4.64635 5.8688 5.86904 4.6461 7.42519 4.6461C8.98135 4.6461 10.204 5.8688 10.204 7.36937C10.204 8.92553 8.98135 10.0926 7.42519 10.0926ZM12.7606 4.14591C12.7606 4.47937 12.4827 4.75726 12.1492 4.75726H10.5931C10.2596 4.75726 9.98174 4.47937 9.98174 4.14591V2.64534C9.98174 2.31187 10.2596 2.03399 10.5931 2.03399H12.1492C12.4827 2.03399 12.7606 2.31187 12.7606 2.64534V4.14591Z" fill="white"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__row--line">
                <div className="container">
                    <div className="footer__row footer-info">
                        <h4 className="footer-info__copy">© 2021, Delivery Grozny</h4>
                        <a href="#" className="footer-info__link">Пользовательское соглашение</a>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer