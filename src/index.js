import './scss/main.scss';
import './js/swiper';
import './js/fancybox';

import { sidebarSwitch, toggleSidebar } from './js/sidebar';
import { popupSwitch } from './js/popup';

sidebarSwitch(toggleSidebar);
popupSwitch();
