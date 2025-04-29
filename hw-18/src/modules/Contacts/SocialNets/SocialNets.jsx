/** @jsxImportSource @emotion/react */

import SnapchatMedia from "../../../shared/components/icons/iconsMedia/SnapchatMedia";
import FacebookMedia from "../../../shared/components/icons/iconsMedia/FacebookMedia";
import XMedia from "../../../shared/components/icons/iconsMedia/XMedia";

import { wpapper, title, boxSocial, social, wpappBox } from "./styles";

const SocialNets = () => {
    return (
        <>
            <div css={wpapper}>
                <p css={title}>Найдите нас:</p>
                <div css={wpappBox}>
                    <div css={boxSocial}>
                        <a href="https://www.snapchat.com/">
                            <SnapchatMedia css={social} />
                        </a>
                    </div>
                    <div css={boxSocial}>
                        <a href="https://www.facebook.com">
                            <FacebookMedia css={social} />
                        </a>
                    </div>
                    <div css={boxSocial}>
                        <a href="https://x.com/">
                            <XMedia css={social} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialNets