import {GridSlider} from "@/src/components/v2/slider/grid-slider";


export const revalidate = 0;

export default async function InstagramPosts() {
    
    let instagramFetch = null
    let images = null
    if(process.env.INSTAGRAM_KEY) {
        instagramFetch = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`, { cache: 'no-store' }).then(res => res.json())
        images = []
        if(instagramFetch && instagramFetch.data) {
            images = instagramFetch.data.map((item:any) => ({
                path: item.media_url,
                caption: item.caption || "",
                type: item.media_type,
                link: item.permalink
            }));
        }


    }
    
    return (
        <main>
            {instagramFetch && (
                <GridSlider images={images} />
            )}
        </main>
    )
}