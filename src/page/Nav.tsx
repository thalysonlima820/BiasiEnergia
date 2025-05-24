const Nav = () => {
    return (
        <div className="navVideo">
            <div className="classlogo">
                <h1 className="textoVideo">Desconto na conta de <br /> energia <span>sem investimentos.</span></h1>
                <img src="https://static.wixstatic.com/media/0c2907_8e73061eeec64a4f942711292ee6101f~mv2.png/v1/fill/w_245,h_279,al_c,lg_1,q_85,enc_avif,quality_auto/G.png" alt="" />
            </div>
            <video
                className="bgVideo"
                src="https://video.wixstatic.com/video/11062b_d578b9d4ffba48c68d086ec29fe9e6f0/720p/mp4/file.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
        </div>
    );
};

export default Nav;
