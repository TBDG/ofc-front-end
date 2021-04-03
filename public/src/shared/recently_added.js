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
    const testImages = [
        [
            './test_images/test1.jpg', 'Fish 1',
        ], [
            './test_images/test2.jpg', 'Fish 2',
        ], [
            './test_images/test3.jpg', 'Fish 3',
        ], [
            './test_images/test4.jpg', 'Fish 4',
        ], [
            './test_images/test5.jpg', 'Fish 5',
        ], [
            './test_images/test6.jpg', 'Fish 6',
        ], 
    ];

    const testImagesMap = (testImages) => {
        return testImages.map((e) => {
            return (<div className='item-block'>
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
            breakpoint: {max: 1024, min: 464},
            items: 3,
        },
        mobile: {
            breakpoint: {max: 550, min: 0},
            items: 2,
        },
    };

    const itemsMap = (items) => {
        //maps array of featured items.
        return items.map((e) => <div>{e}</div>)
    }

    return (
        <div
            id="testimonials"
            style={{
                paddingBottom: '30px',
                paddingTop: '30px',
                position: 'relative',
            }}
        >
            <h3 className='testimonials-title' >Recently Added!</h3>
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
