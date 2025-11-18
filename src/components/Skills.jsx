import React from 'react';
import './Skills.css';

const Skills = () => {
    const carouselItems = [
        { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/887/817/276/html-5-html-5-logo-wallpaper-preview.jpg' },
        { imageUrl: 'https://wisetrolley.com/wp-content/uploads/2023/03/CSS-T-shirt-Black-2.jpg' },
        { imageUrl: 'https://t4.ftcdn.net/jpg/04/94/31/49/360_F_494314968_qv2hzfIXhUhUvIufbCNw0dU6hwxHf42P.jpg' },
        { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRyPIroOfNxpfm214hlkDevifQV7md4nxd1g&s' },
        { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/294/834/442/reactjs-facebook-javascript-minimalism-wallpaper-preview.jpg' },
        { imageUrl: 'https://miro.medium.com/v2/resize:fit:22584/1*WDX58nzlaiClqTFT59v7RQ.jpeg' },
        { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/645/96/47/python-programming-programming-programming-language-code-hd-wallpaper-preview.jpg' },
        { imageUrl: 'https://admin.incora.software/uploads/django_logo_1b9b4564ab.png' },
        { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s' },
        { imageUrl: 'https://thumbs.dreamstime.com/b/sql-icon-isolated-dark-background-simple-vector-logo-sql-icon-isolated-dark-background-253792124.jpg' },
        { imageUrl: 'https://markovate.com/wp-content/uploads/2022/06/Is-Express.js-Framework-An-Ideal-Choice-For-Developing-Enterprise-Applications_@2x.png.webp' },
    ];

    return (
        <div className='skill-head'>
            <div className="carousel md:pr-0">
                <div className="carousel-rotation-direction">
                    <ul className="carousel-item-wrapper" style={{ '--_num-elements': carouselItems.length }}>
                        {carouselItems.map((item, index) => (
                            <li
                                className="carousel-item"
                                key={index}
                                style={{
                                    '--_index': index + 1,
                                    '--_image-url': `url(${item.imageUrl})`
                                }}
                            >
                                <a target="_blank" rel="noopener noreferrer"></a>
                            </li>
                        ))}
                        <li className="carousel-ground"></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
