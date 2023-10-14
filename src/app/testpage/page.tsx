import Link from "next/link";
import CardSetBanner from "../components/CardSetBanner/CardSetBanner";
import CardRecommend from "../components/CardRecommend/CardRecommend";

export default function TestPage() {
    return (
        <>
            <h1>This is test page!</h1>
            <Link href="..">Back to main</Link>

            <div>
                <CardSetBanner
                    title="Bright Lights"
                    imgUrl="/assets/images/temp_banner_img.svg"
                    alt="..."
                />
            </div>

            <div>
                <CardRecommend
                    name="Red-Eyes Black Dragon 25th Anniversary"
                    imgUrl="/assets/images/temp_card_image.svg"
                    alt="..."
                    price="3.99"
                />
            </div>
        </>
    )

}