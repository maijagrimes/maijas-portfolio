import './style.css'
import './credits.css'

export default function Credits () {
    return (
        <>
            <section className='credits' id='credits'>
                <div className='credits-header'>
                    <h1>Credits</h1> 
                    <p>Where I got my elements</p>
                </div>
                <h2>Wallpapers</h2>
                <div className='row'>
                    <div className='wallpaper'>
                        <img src="/patterns/pinkplaid.jpg" alt="Pink Plaid" />
                        <p className='name'>Azalea Pink Tartan</p>
                        <p className='name'>from <a href="https://baggu.com/wallpapers">Baggu Summer '26</a></p>
                    </div>
                    <div className='wallpaper'>
                        <img src="/patterns/stripe.png" alt="Stripes" />
                        <p className='name'>Periwinkle Stripe</p>
                        <p className='name'>from <a href="https://baggu.com/wallpapers">Baggu Summer '21</a></p>
                    </div>
                    <div className='wallpaper'>
                        <img src="/patterns/blueplaid.jpg" alt="Blue Plaid" />
                        <p className='name'>Blue Tartan</p>
                        <p className='name'>from <a href="https://baggu.com/wallpapers">Baggu Summer '26</a></p>
                    </div>
                </div>
                <h2>Fonts</h2>
                <div className='row'>
                    <div className='font-card'>
                        <div className='font-preview'>
                            <span style={{fontFamily: 'Garamond, serif', fontSize: '10rem', paddingBottom: '15px'}}>Aa</span>
                        </div>
                        <p className='name'>Apple Garamond</p>
                        <p className='name'>from <a href="https://www.dafont.com/apple-garamond.font">dafont.com</a></p>
                    </div>
                    <div className='font-card'>
                        <div className='font-preview'>
                            <span style={{fontFamily: 'Pink, sans-serif', fontSize: '8rem', paddingTop: '29px'}}>Aa</span>
                        </div>
                        <p className='name'>Pink</p>
                        <p className='name'>from <a href="https://ajneuding.neocities.org/fontz">AJN Fonts</a></p>
                    </div>
                    <div className='font-card'>
                        <div className='font-preview'>
                            <span style={{fontFamily: 'Short, sans-serif', fontSize: '6.5rem', paddingTop: '25px'}}>Aa</span>
                        </div>
                        <p className='name'>Short Stack</p>
                        <p className='name'>from <a href="https://fonts.google.com/specimen/Short+Stack?preview.script=Latn">Google Fonts</a></p>
                    </div>
                </div>
            </section>
        </>
    );
}