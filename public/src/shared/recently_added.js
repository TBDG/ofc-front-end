import test1 from './test_images/test1.jpg';
import test2 from './test_images/test2.jpg';
import test3 from './test_images/test3.jpg';
import test4 from './test_images/test4.jpg';
import test5 from './test_images/test1.jpg';
import test6 from './test_images/test6.jpg';

import React from 'react';
import Carousel from 'react-multi-carousel';
//see documentation: https://www.npmjs.com/package/react-multi-carousel
import 'react-multi-carousel/lib/styles.css';
import {VscChevronLeft, VscChevronRight} from 'react-icons/vsc';
//see documentation: https://react-icons.github.io/react-icons/

const CustomRightArrow = ({ onClick, ...rest }) => {
    return <VscChevronRight className="right-arrow" onClick={() => onClick()}/>;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
    return <VscChevronLeft className="left-arrow" onClick={() => onClick()}/>;
};

const RecentlyAdded = () => {
    //added to test feature. will be replaced later.
    const testImages = [
        [
            test1, 'Fish 1',
        ], [
            test2, 'Fish 2',
        ], [
            test3, 'Fish 3',
        ], [
            test4, 'Fish 4',
        ], [
            test5, 'Fish 5',
        ], [
            test6, 'Fish 6',
        ], 
    ];

    //added to test feature. will be replaced later.
    const testImagesMap = (testImages) => {
        return testImages.map((e) => {
            return (
            <div className='test-item-block'>
                <img src={e[0]} alt='' className='image'/>
                <p className='details'>— {e[1]}</p>
            </div>)
        })
    };

    const responsive = {
        superLargeDesktop: {
            // for the car
            breakpoint: {max: 4000, min: 3000},
            items: 4,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4,
        },
        tablet: {
            breakpoint: {max: 1024, min: 650},
            items: 3,
        },
        mobile: {
            breakpoint: {max: 650, min: 0},
            items: 2,
        },
    };

    const itemsMap = (items) => {
        //maps array of featured items.
        return items.map((e) => <div>{e}</div>)
    }

    return (
        <div id="recently-added">
            <p id='recently-added-title' >Recently Added!</p>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={responsive}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {itemsMap(testImagesMap(testImages))}
            </Carousel>
        </div>
    );
};

export default RecentlyAdded;
