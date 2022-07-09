import React from 'react'
import ChannelRow from './ClannelRow'
import VideoRow from './VideoRow'
import Filter from './Filter'
import "./estilos/SearchPage.css"

function SearchPage() {
  return (
    <main className="main-videosBuscados"> 
        <section className='main_section-videosBuscados'>
            <Filter></Filter>
            <hr/>
            <ChannelRow
                image="https://yt3.ggpht.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj"
                Channel="Bad Bunny"
                verified
                subs="41,5"
                noOfVideos={122}
                description="Bienvenid@s al canal oficial de YouTube de Bad Bunny. ¡Encuentra todos los videos musicales!"
            />
            <hr/>
            <VideoRow
                image="https://coclyrics.com/wp-content/uploads/2022/05/Bad-Bunny-Chencho-Corleone-Me-Porto-Bonito-Lyrics.jpg"
                title="Bad Bunny (Chencho Cor) - Me Porto Bonito (Official..."
                views={"19.010.870"}
                timestamp={"20 jun 2022"}
                channelImage="https://yt3.ggpht.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj"
                channel="Bad Bunny"
                verified 
                description="#BadBunny #UnVeranoSinTi #MePortoBonito © 2022 Rimas Entertainment."
            />
            <VideoRow
                image="https://coclyrics.com/wp-content/uploads/2022/05/Bad-Bunny-Chencho-Corleone-Me-Porto-Bonito-Lyrics.jpg"
                title="Bad Bunny (Chencho Cor) - Me Porto Bonito (Official..."
                views="19.010.870"
                timestamp="20 jun 2022"
                channelImage="https://yt3.ggpht.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj"
                channel="Bad Bunny"
                verified 
                description="#BadBunny #UnVeranoSinTi #MePortoBonito © 2022 Rimas Entertainment."
            />
            <VideoRow
                image="https://coclyrics.com/wp-content/uploads/2022/05/Bad-Bunny-Chencho-Corleone-Me-Porto-Bonito-Lyrics.jpg"
                title="Bad Bunny (Chencho Cor) - Me Porto Bonito (Official..."
                views="19.010.870"
                timestamp="20 jun 2022"
                channelImage="https://yt3.ggpht.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj"
                channel="Bad Bunny"
                verified 
                description="#BadBunny #UnVeranoSinTi #MePortoBonito © 2022 Rimas Entertainment."
            />
            <VideoRow
                image="https://coclyrics.com/wp-content/uploads/2022/05/Bad-Bunny-Chencho-Corleone-Me-Porto-Bonito-Lyrics.jpg"
                title="Bad Bunny (Chencho Cor) - Me Porto Bonito (Official..."
                views="19.010.870"
                timestamp="20 jun 2022"
                channelImage="https://yt3.ggpht.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj"
                channel="Bad Bunny"
                verified 
                description="#BadBunny #UnVeranoSinTi #MePortoBonito © 2022 Rimas Entertainment."
            />                                   
        </section>
    </main>  )
}

export default SearchPage