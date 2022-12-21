import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

/* eslint-disable @next/next/no-img-element */
function Tools() {
  return (
    <section
      id='whatwedo'
      className='min-h-screen w-full px-4 py-8 flex flex-col '
    >
      <div className='flex flex-col justify-center grow'>
        <div className='grid grid-cols-auto gap-8 place-items-center w-full sm:px-6 lg:px-8 lg:grid-cols-3'>
          {
            // grid for displaying the tools
          }
          <Card
            title='Sleep Tracker'
            description='Track your sleep and see how it affects your mood and productivity.'
            image='https://images.unsplash.com/photo-1572176280695-fc4a0c245b02?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8bmlnaHR8fHx8fHwxNjcxNDczMzA3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
            link='https://sleep-tracker-cobra.vercel.app/'
          />
          <Card
            title='Workout Tracker'
            description='Track your workouts and see how it affects your mood and productivity.'
            image='https://images.unsplash.com/photo-1599058917212-d750089bc07e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8TWFsZSBneW18fHx8fHwxNjcxNDczNTAz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
            link='https://workout-tracker-cobra.vercel.app/'
          />
          <Card
            title='Habits Tracker'
            description='Track your habits and see how it affects your mood and productivity.'
            image='https://images.unsplash.com/photo-1521310383786-3716592be507?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8am91cm5hbHx8fHx8fDE2NzE0NzM1NzQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
            link='https://www.sleepcycle.com/'
          />
        </div>
      </div>
    </section>
  );
}

function Card(props) {
  const { title, description, image, link } = props;

  // animation variations
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  // for the animation to trigger when the card is in view
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: 0.5 }}
      class='max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-zinc-900/50 backdrop-filter backdrop-blur-lg
       dark:border-gray-700'
    >
      {
        // image of the card
      }
      <a href='#'>
        <img class='rounded-t-lg' src={image} alt='' />
      </a>

      <motion.div
        ref={ref2}
        initial='hidden'
        animate={inView2 ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
        class='p-5'
      >
        {
          // animated heading, the animation is triggered when the card is in view, handled by motion.div
        }
        <a href='#'>
          <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </a>
        {
          // description of the card
        }
        <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        <a
          href='#'
          class='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
        >
          View
          <svg
            aria-hidden='true'
            class='w-4 h-4 ml-2 -mr-1'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Tools;
