import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')} >
            <img className={cx('avatar')} src='https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/286787926_732648751496442_3166765041407292501_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7PPQwjUE_dkAX-eF0fG&_nc_oc=AQnFsIke4-JjJm45WizsLewLS9bm1gMT_ExqVoJc_SkBJ133KV_YNdRn6o6_gfMh84E&_nc_ht=scontent.fvca1-1.fna&oh=00_AT-ZZU8Hwg0-hNerp5sjPil-O5IVJzpBASgrBiKInI2KhQ&oe=62AA7E99' alt='Nghĩa' />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>nghiantn</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Nguyễn Thành Nghĩa</span>
            </div>
        </ div>
    )
}

export default AccountItem;
