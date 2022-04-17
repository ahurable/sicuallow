import preloaderGif from '../assets/img/preloader.gif';


export default function Preloader() {

    return(

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    {/* <img src={preloaderGif}  /> */}
                    <div style={{
                        backgroundImage: `url(${preloaderGif})`,
                        width: '800px',
                        height: '600px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}></div>
                </div>
            </div>
        </div>

    )

}