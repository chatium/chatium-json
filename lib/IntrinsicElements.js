"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intrinsicBlocks = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-namespace */
const Audio_1 = require("./blocks/Audio");
const Button_1 = require("./blocks/Button");
const Footer_1 = require("./blocks/Footer");
const Gallery_1 = require("./blocks/Gallery");
const Header_1 = require("./blocks/Header");
const HorizontalCards_1 = require("./blocks/HorizontalCards");
const Image_1 = require("./blocks/Image");
const ListItem_1 = require("./blocks/ListItem");
const Search_1 = require("./blocks/Search");
const Text_1 = require("./blocks/Text");
const Video_1 = require("./blocks/Video");
const Screen_1 = require("./Screen");
const Fragment_1 = require("./utils/Fragment");
exports.intrinsicBlocks = {
    audio: Audio_1.Audio,
    'horizontal-cards': HorizontalCards_1.HorizontalCards,
    button: Button_1.Button,
    f: Fragment_1.Fragment,
    footer: Footer_1.Footer,
    gallery: Gallery_1.Gallery,
    header: Header_1.Header,
    image: Image_1.Image,
    'list-item': ListItem_1.ListItem,
    screen: Screen_1.Screen,
    search: Search_1.Search,
    text: Text_1.Text,
    video: Video_1.Video,
};
