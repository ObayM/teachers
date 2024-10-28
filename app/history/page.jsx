'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scroll, Crown, Castle, Sword, Clock, BookOpen, Trophy, GraduationCap, Medal, Award, Star } from 'lucide-react';

const messagesData = [
    {
        id: 1,
        type: 'title',
        heading: "السلام عليكم  اتمني حضرتك تكون بخير وان شاء الله ماخدش من وقتك كتيير",
        subheading: "",
    },

    {
        id: 2,
        type: 'title',
        heading: "هبدا باني اعرف نفسي  و بعدين هقول لحضرتك انا عايز ايه",
        subheading: "",
    },
    {
        id: 2,
        type: 'achievement',
        icon: Trophy,
        title: "شهادة من وزارة الاتصالات",
        description: "منحه مقدمه من وزارة الاتصالت قبلت فيها وهذه شهادة اتمام الدراسة",
        details: [

        ],
        image: "/deci.jpg",
        date: ""
    },
    {
        id: 3,
        type: 'achievement',
        icon: Medal,
        title: "منحة من AWS",
        description: "منحه مقدمه من شركة امازون العالميه يقبل فيها فقط 2000 شخص من حول العالم وبفضل الله قبلت فيها وانهيتها واعتبر من اصغر المقبولين فيها وهذه هي الشهاده"
,        details: [
            "احب بس اقول اني اصغر واحد في المنحة ديه ومعظم اللي درست معاهم كانو في الجامعات",
        "تقدر قيمة المنحه بحوالي 2000 دولار "
        ],
        image: "/aws_cer.jpg",
        date: ""
    },
    {
        id: 4,
        type: 'achievement',
        icon: Award,
        title: "مرشح عالمي في مسابقة ناسا",
        description: "مسابقة ناسا هي لطلبة الجامعات لابتكار مشاريع تحل مشكلات في الفضاء",
        details: [
            "فزت بالمركز السادس من اصل اكثر من 70 فريق",
            "تم ترشيحي للتحكيم العالمي",
            "معظم الفائزين من طلبة الجامعات والحمد لله فزت في هذا السن"
        ],
        image: "/nasa.jpeg",
        date: ""
    },
    {
        id: 5,
        type: 'title',
        heading: "ديه كانت اهم الحاجات اللي عملتها خلال السنه اللي فاتت انا بوريك ده بس عشان اقولك اني بس عايز اخد الدرجات اللي نقصتها انا عارف انا مقصر كتيير بس انت شايف انا كنت مشغول في ايه واسف لاي ازعاج",
        subheading: "مع تحياتي طالبك المخلص أبي محمد",
    },

    {
        id: 6,
        type: 'title',
        heading: "الموقع ده من تصميمي فلو عحبك قولي وهو واخد حوالي 308 سطر ف ممكن تقدر مجهودي عشان اعمله وتعطيني الدرجات🥹",
        subheading: "مع تحياتي طالبك المخلص أبي محمد",
    },
    
    {
        id: 7,
        type: 'closing',
        text: "والدرجات بالنسبة لي حاجه عادية خالص بس المشكله ان هي ليها اعتراف دولي وفي شوية حاجات مهمه فيها فلازم اجيب درجات حلوه و ان شاء الله هكمل الكراسة واحضر",
    }
];

const HistoricalBackground = () => {
    const icons = [Crown, Scroll, Castle, Sword];
    return (
        <div className="fixed inset-0 overflow-hidden opacity-10">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
            >
                {[...Array(20)].map((_, i) => {
                    const IconComponent = icons[i % 4];
                    return (
                        <div
                            key={i}
                            className="absolute"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                transform: `rotate(${Math.random() * 360}deg)`
                            }}
                        >
                            <IconComponent size={24} className="text-amber-900" />
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

const renderSlideContent = (slide) => {
    switch (slide.type) {
        case 'title':
            return (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-6 p-6"
                >
                    <div className="relative inline-block mb-8">
                        <Clock className="w-16 h-16 text-amber-700 absolute -top-8 -left-8 opacity-20" />
                        <h1 className="text-3xl font-bold text-amber-900 leading-tight">
                            {slide.heading}
                        </h1>
                        <Clock className="w-16 h-16 text-amber-700 absolute -bottom-8 -right-8 opacity-20" />
                    </div>
                    <p className="text-xl text-amber-800">{slide.subheading}</p>
                </motion.div>
            );

        case 'achievement':
            const IconComponent = slide.icon;
            return (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-amber-50 bg-opacity-90 rounded-xl shadow-lg overflow-hidden mx-4"
                >
                    <div className="relative h-48 overflow-hidden">
                        <img 
                            src={slide.image} 
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <IconComponent className="w-6 h-6" />
                                <span className="text-amber-200 text-sm">{slide.date}</span>
                            </div>
                            <h2 className="text-2xl font-bold">{slide.title}</h2>
                        </div>
                    </div>
                    
                    <div className="p-6">
                        <p className="text-lg text-amber-900 font-semibold mb-4">
                            {slide.description}
                        </p>
                        <div className="space-y-3">
                            {slide.details.map((detail, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                                    <p className="text-amber-800">{detail}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            );

        case 'closing':
            return (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-amber-50 bg-opacity-90 p-6 rounded-xl shadow-lg border-t-4 border-amber-700 mx-4"
                >
                    <Scroll className="w-8 h-8 text-amber-700 mb-4 mx-auto" />
                    <p className="text-amber-900 leading-relaxed text-center">
                        {slide.text}
                    </p>
                </motion.div>
            );

        default:
            return null;
    }
};

const HistoryPresentation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const navigate = (newDirection) => {
        if ((newDirection === 1 && currentIndex < messagesData.length - 1) ||
            (newDirection === -1 && currentIndex > 0)) {
            setDirection(newDirection);
            setCurrentIndex(prevIndex => prevIndex + newDirection);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') navigate(1);
            if (event.key === 'ArrowLeft') navigate(-1);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        }),
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 overflow-hidden relative">
            <HistoricalBackground />
            
            <div className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-b from-amber-200 to-transparent z-10" />
            
            <div className="relative min-h-screen flex items-center justify-center py-20">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.5 },
                            scale: { duration: 0.5 },
                        }}
                        className="w-full max-w-md"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = Math.abs(offset.x) * velocity.x;
                            if (swipe < -10000) {
                                navigate(1);
                            } else if (swipe > 10000) {
                                navigate(-1);
                            }
                        }}
                    >
                        {renderSlideContent(messagesData[currentIndex])}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation dots */}
            <div className="fixed bottom-20 left-0 right-0 flex justify-center space-x-2 z-20">
                {messagesData.map((_, index) => (
                    <motion.div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-amber-700' : 'bg-amber-400'}`}
                        whileHover={{ scale: 1.5 }}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
            
            {/* Navigation arrows */}
            <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center space-x-8 z-20">
                <motion.button
                    className="w-14 h-14 bg-amber-700 rounded-full flex items-center justify-center shadow-lg disabled:opacity-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate(-1)}
                    disabled={currentIndex === 0}
                >
                    <svg className="w-8 h-8 text-white transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
                
                <motion.button
                    className="w-14 h-14 bg-amber-700 rounded-full flex items-center justify-center shadow-lg disabled:opacity-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate(1)}
                    disabled={currentIndex === messagesData.length - 1}
                >
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>
            </div>
        </div>
    );
};

export default HistoryPresentation;