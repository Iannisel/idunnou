/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tools from "../components/tools";

function App() {
  // animation variations

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  // for the logo

  const logoVariants = {
    hidden: { opacity: 0, x: 100, rotate: 180 },
    visible: { opacity: 1, x: 0, rotate: 0 },
  };

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  return (
    <main className='bg-main min-h-screen'>
      <section>
        <div class='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div class='mr-auto place-self-center lg:col-span-7'>
            <motion.div
              ref={ref}
              initial='hidden'
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              {
                // animated heading
              }
              <h1 class='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
                Self Improvement Tools By The Cobras
              </h1>
            </motion.div>
            <motion.div
              ref={ref}
              initial='hidden'
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {
                // description
              }
              <p class='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
                We are a group of people who are passionate about self
                improvement and helping others. We have created a number of
                tools to help you on your journey.
              </p>
            </motion.div>
          </div>
          <motion.div
            ref={ref2}
            initial='hidden'
            animate={inView2 ? "visible" : "hidden"}
            variants={logoVariants}
            transition={{ duration: 1, delay: 0.5 }}
            class='hidden lg:mt-0 lg:col-span-5 lg:flex'
          >
            {
              // the logo
            }
            <img
              src='
            https://media.discordapp.net/attachments/1054436485421604944/1054442438682492998/cobra.png?width=698&height=670
          '
              alt='cobras'
            />
          </motion.div>
        </div>
      </section>

      <Tools />
    </main>
  );
}

export default App;
