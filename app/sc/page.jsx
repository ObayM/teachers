'use client'


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Atom, FlaskConical, Microscope, Dna } from 'lucide-react';

const flattenMessagesData = () => {
  const flattened = [];
  messagesData.forEach(message => {
    if (message.type === 'image_description') {
      message.items.forEach(item => {
        flattened.push({ ...item, type: 'image' });
      });
    } else {
      flattened.push(message);
    }
  });
  return flattened;
};

const messagesData = [
    { id: 1, text: `السلام عليكم اتمني حضرتك تكوني باحسن حال ان شاء الله ماخدش من وقتك كتيير وليا طلب  صغير`},
    { id: 2, text: `هو انا عايز اطمن علي دراجاتي و ان شاء الله ان هي متكونش متدنية اوي و ياريت اخدها كامله وهوضح ليه كمان شوية`},
    { id: 3, text: `انا ابي الحمد لله حصلت علي شهادات كثيرة و فزت بمسابقات عديده و كان من اهمها مسابقه تابعة لوكالة ناسا وممكن تكملي للرسائل القادمة`},
    { 
      id: 4, 
      type: 'image_description',
      items: [
        {
          image: "/aws_cer.jpg",
          description: "منحه مقدمه من شركة امازون العالميه يقبل فيها فقط 2000 شخص من حول العالم وبفضل الله قبلت فيها وانهيتها واعتبر من اصغر المقبولين فيها وهذه هي الشهاده"
        },
        {
          image: "/deci.jpg",
          description: "منحه مقدمه من وزارة الاتصالت قبلت فيها وهذه شهادة اتمام الدراسة"
        },
        {
          image: "/nasa.jpeg",
          description: "مسابقه تابعه لوكالة ناسا الفضائيه فزت فيها بالمركز السادس وتاهلت للمراحله العالميه"
        }
      ]
    },
    { id: 5, text: `ديه كانت بعض الشهادات بتاعتي واسف لوقتك ولكن الدرجات بالنسبة ليا حاجه مش مهمه ولا بتمثل نجاحي ولا تفوقي وهي مجرد حبر علي ورق ولكن الدراجات مهمه في المنح الدولية وهي اهم الحاجات اللي بتثبت تفوقي`},
    { id: 6, text:`من اهدافي هي الدراسة في الخارج بعد الثانويه ان شاء الله والحمد لله انا دائما من الاوائل منذ الصغر لكن حضور المدرسه اجباري شئ مرهق جدا بالنسبة لي و مع العلم اني مبروحش دروس  بس المشكله ان لو  حصلت علي درجات ضعيفه هذه السنه ده هياثر علي ملفي الاكاديمي فارجو ان انت تعطين الدراجات كامله` },
    { id: 7, text: `و ان شاء الله هحاول احضر الايام القادمه و الاختبارات الشهرية هتكون كويسه ان شاء الله بس الغياب ده مكانش مقصود خالص المشكله بس اني ساعات بكون في مسابقات ومبعرفش اكون موجود في المدرسه فانا اسف جدا`},
    { id: 8, text: `بحصوص الموقع ده فهو من تصميمي و ديه حاجه ان مميز فيها من وانا صغير بحيث اني عملت حوالي 20 مشروع و لو عجبتك الطريقة ممكن تقوليلي رايك`},
    { id: 9, text: `ختامًا، أهديك هذه القصيدة من تأليفي، أرجو أن تنال إعجابك أستاذي العزيز، وأن تتكرم بالرد على رسائلي.
    `},
  ];
  
const ScienceIcon = ({ icon: Icon }) => (
  <div className="absolute text-blue-600 opacity-20" style={{
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    transform: `scale(${Math.random() * 0.5 + 0.5})`,
  }}>
    <Icon size={48} />
  </div>
);

const PeriodicTableBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-10">
    {[...Array(118)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-blue-500 rounded-md flex items-center justify-center text-white font-bold"
        style={{
          width: '60px',
          height: '60px',
          top: `${Math.floor(i / 18) * 70}px`,
          left: `${(i % 18) * 70}px`,
        }}
      >
        {i + 1}
      </div>
    ))}
  </div>
);

const ArabicMessagesPage = () => {
  const flattenedMessages = flattenMessagesData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);


  const navigate = (newDirection) => {
    if ((newDirection === 1 && currentIndex < flattenedMessages.length - 1) ||
        (newDirection === -1 && currentIndex > 0)) {
      setDirection(newDirection);
      setCurrentIndex(prevIndex => prevIndex + newDirection);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') navigate(-1);
      if (event.key === 'ArrowLeft') navigate(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  const renderContent = (message) => {
    if (message.type === 'image') {
      return (
        <div className="h-full w-full flex flex-col justify-center items-center p-4">
          <div className="bg-white bg-opacity-90 rounded-3xl shadow-lg p-6 w-full max-w-sm mb-4">
            <img src={message.image} alt={message.description} className="w-full h-64 object-cover rounded-2xl mb-4" />
          </div>
          <p className="text-right text-blue-800 text-lg font-semibold bg-white bg-opacity-90 rounded-xl p-4 w-full max-w-sm">
            {message.description}
          </p>
        </div>
      );
    }
    return (
      <div className="bg-white bg-opacity-90 rounded-3xl shadow-lg p-8 w-full max-w-md mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-100 opacity-50"></div>
        <h2 className="text-3xl font-bold text-blue-800 mb-6 leading-relaxed text-right relative z-10">
          {message.text}
        </h2>
        <div className="w-24 h-1 bg-blue-500 mr-auto rounded-full relative z-10"></div>
        <Atom className="absolute top-2 left-2 text-blue-500 opacity-30" size={24} />
        <FlaskConical className="absolute bottom-2 right-2 text-blue-500 opacity-30" size={24} />
      </div>
    );
  };

  return (
    <div className="font-arabic bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen overflow-hidden flex flex-col relative">
      <PeriodicTableBackground />
      <ScienceIcon icon={Atom} />
      <ScienceIcon icon={FlaskConical} />
      <ScienceIcon icon={Microscope} />
      <ScienceIcon icon={Dna} />
      
      <div className="flex-grow relative z-10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex items-center justify-center p-4"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                navigate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                navigate(-1);
              }
            }}
          >
            {renderContent(flattenedMessages[currentIndex])}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-200 to-transparent pointer-events-none" />
      
      <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center space-x-4 z-20">
        <motion.button
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(-1)}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="text-white" size={24} />
        </motion.button>
        <div className="text-blue-800 font-bold">
          {currentIndex + 1} / {flattenedMessages.length}
        </div>
        <motion.button
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(1)}
          disabled={currentIndex === flattenedMessages.length - 1}
        >
          <ChevronRight className="text-white" size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default ArabicMessagesPage;