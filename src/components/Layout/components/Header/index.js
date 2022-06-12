import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faGear, faCoins, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import Button from '~/components/Button'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Header.module.scss'
import images from '~/assets/images'
import AccountItem from '~/components/AccountItem'
import Menu from '~/components/Popper/Menu'
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    },
]

function Header() {
    const [searchResult, setSearchResult] = useState([])

    const currentUser = true

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break
            default:
                break
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@nghiantn'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        }
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt='TikTok' />
            <HeadlessTippy
                interactive
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content='Upload video' placement='bottom'>
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Message" placement="bottom">
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>12</span>
                            </button>
                        </Tippy>
                    </>
                )
                    : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            src='https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/286787926_732648751496442_3166765041407292501_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7PPQwjUE_dkAX-eF0fG&_nc_oc=AQnFsIke4-JjJm45WizsLewLS9bm1gMT_ExqVoJc_SkBJ133KV_YNdRn6o6_gfMh84E&_nc_ht=scontent.fvca1-1.fna&oh=00_AT-ZZU8Hwg0-hNerp5sjPil-O5IVJzpBASgrBiKInI2KhQ&oe=62AA7E99'
                            alt='Nghĩa'
                            fallback='https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png'
                        />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>

        </div>
    </header>
}

export default Header
