import Layout from "@/components/Layout";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const abrilFactface = localFont({
  src: "./../../public/fonts/AbrilFatface-Regular.woff",
});

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <div className="min-h-[calc(100vh-8rem)] w-full flex justify-center items-center content-center">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="text-center">
            <h1
              className={`block text-3xl font-bold heading text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white ${abrilFactface.className}`}
            >
              Rushclin Takam
            </h1>
            <p className="mt-3 text-lg text text-gray-800 dark:text-gray-400">
              {`I am a young student, passionate about new technologies, My fields
              of skills are multiple, I have an aptitude to deal with the
              problems both in life common only in programming. I find my
              comfort in web and mobile development, dynamic and team worker
              meet challenges. I have a mastery of development tools and I'm in
              constant search for learning. Find out more on my profile. So I
              want to join your team.`}
            </p>

            <div>
              <Link
                type="button"
                className="py-3 px-4 my-5 mx-5 inline-flex justify-center items-center gap-2 rounded-full font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white transition-all capitalize text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 border-none"
                href="/about"
              >
                Open my resume
                <svg
                  className="w-2.5 h-auto"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>

              <Link
                type="button"
                className="py-3 px-4 my-5 mx-5 inline-flex justify-center items-center gap-2 rounded-full font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm capitalize dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 border-none"
                href="/experiences"
              >
                Go to my experiences
                <svg
                  className="w-2.5 h-auto"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="h-full flex items-center justify-center py-0 md:py-5">
            <Image
              src="/images/rushclin2.jpg"
              width={100}
              height={30}
              alt="Rushclin Takam"
              style={{ width: "70%", height: "auto" }}
              className="rounded-full border hover:rotate-6 transition-transform"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
