'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const poem = `يا سيّدي من عصرٍ ذهبيٍّ مضى
عهدُكَ نورٌ في دُجى الزمانِ بدا
ها قد أتيتُكَ من زمانٍ عجيبٍ
عالمنا فيه غريبٌ مُريبْ
سُفنٌ بلا أشرعةٍ تُحلّقُ في الفضاءِ
وأصواتٌ تُسمعُ عبرَ الأمصارِ البعيدةِ
أرضٌ تُزارُ في لحظاتٍ سريعةٍ
و أخبارُها تصلُ بلا رسائلَ بَريئةٍ
الناسُ في بيوتهمْ مع العالمِ مجتمعْ
يُشاهدُ كلٌّ ما يشاءُ مُتَحدّثْ
كتبٌ بلا أوراقٍ تُقرأُ في راحةِ اليدْ
وصورٌ تُرسمُ بالضوءِ بلا جهدٍ مُبدَعْ
لكنَّ يا سيدي هُنا حُزنٌ عميقٌ
فالقلبُ فارغٌ و الإيمانُ ضعيفٌ
كثيرٌ مِنّا عن دينِ اللهِ غافلُ
و بالشهواتِ و الدنيا مُتَهافتُ مُقاتلُ
فادعُ اللهَ يا سيدي أن يُعيدَ لنا
عهدَكَ نورُهُ و عِلمُهُ هُدىً لنا
و أن يَهديَ ضالَّنا و يُثبّتَ إيمانَنا
و يُعيدَ لنا عزَّنا و يُعليَ شأنَنا`;
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
  flattened.push({ id: 'poem', type: 'poem', text: poem });
  return flattened;
};

const messagesData = [
  { id: 1, text: `أستاذي العزيز، سلام الله عليك،
  أرجو أن تكون بأفضل حال، طالبك ... يتقدم إليك بخالص التحية والتقدير، ويأمل منك قبول عذره وتلبية طلبه الصغير.`},
  { id: 2, text: `أستاذي الكريم، أستأذن من وقتك الثمين لقراءة سطوري القادمة، حيث أطلب منك التكرم بمنحي درجاتي كاملة، وسأوضح لك الأسباب في الرسائل التالية.
  ` },
  { id: 3, text: `لقد حالفني التوفيق، ولله الحمد، بالفوز في العديد من المسابقات، كان من أبرزها مسابقة ترشيحي لتمثيل مصر أمام العالم، والتي أشرفت عليها وكالة ناسا. كما أنني حاصل على العديد من الشهادات التي يمكنك الاطلاع عليها أسفل هذه الرسائل.
  ` },
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
  { id: 5, text: `أعتذر بشدة لاستهلاك وقتك الثمين، فأنا أدرك قيمته. إن هذه الدرجات لا تعني لي سوى حبر على ورق، ولولا أهميتها واعترافها الدولي لما سعيت في طلبها.
  `},
  { id: 6, text: `من بين طموحاتي الكثيرة، أرغب في إكمال دراستي في الخارج، في دول مثل المملكة العربية السعودية. وفي حال حصولي على درجات متدنية، فإن ذلك سيؤثر سلبًا على ملف أعمالي الأكاديمية. ولله الحمد، لطالما كنت من المتفوقين وحاصلًا على درجات عالية منذ صغري.
  ` },
  { id: 7, text: `أستاذي الفاضل، غيابي المتكرر لم يكن مقصودًا على الإطلاق، فمشاغلي كثيرة والمدرسة مرهقة جدًا بالنسبة لي. أقدم إليك خالص اعتذاري وأرجو تقبله.
  `},
  { id: 8, text: `قمتُ بتصميم هذا الموقع بنفسي، فانا مبرمج منذ صغري وإن أعجبك التصميم، فأرجو إخباري برأيك، وآمل أن ينال الخط والطريقة إعجابك.
  `},
  { id: 9, text: `ختامًا، أهديك هذه القصيدة من تأليفي، أرجو أن تنال إعجابك أستاذي العزيز، وأن تتكرم بالرد على رسائلي.
  `},
];

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
          <p className="text-right text-amber-800 text-lg font-semibold bg-white bg-opacity-90 rounded-xl p-4 w-full max-w-sm">
            {message.description}
          </p>
        </div>
      );
    } else if (message.type === 'poem') {
      return (
        <div className="bg-white bg-opacity-90 rounded-3xl shadow-lg p-8 w-full max-w-2xl mx-auto overflow-y-auto max-h-[80vh]">
          <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">قصيدة</h2>
          <p className="text-center text-amber-800 text-2xl whitespace-pre-wrap leading-relaxed">
            {message.text}
          </p>
        </div>
      );
    }
    return (
      <div className="bg-white bg-opacity-90 rounded-3xl shadow-lg p-8 w-full max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 leading-relaxed text-right">
          {message.text}
        </h2>
        <div className="w-24 h-1 bg-amber-500 mr-auto rounded-full"></div>
      </div>
    );
  };

  return (
    <div className="font-arabic bg-gradient-to-br from-amber-100 to-amber-300 min-h-screen overflow-hidden flex flex-col">
      <div className="flex-grow relative">
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
      
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-200 to-transparent pointer-events-none" />
      
      <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center space-x-4">
        <motion.button
          className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(-1)}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="text-white" size={24} />
        </motion.button>
        <div className="text-amber-800 font-bold">
          {currentIndex + 1} / {flattenedMessages.length}
        </div>
        <motion.button
          className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg"
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