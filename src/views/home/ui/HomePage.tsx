import Image from 'next/image';
import { Header, Footer } from '@/widgets';
import { Button, MainLayout } from '@/shared/ui';
import hero from '../assets/hero.webp';
import idea from '../assets/idea.webp';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className='min-h-full h-auto'>
        <MainLayout>
          <div className='flex gap-8 py-8'>
            <div className='flex flex-col gap-4 items-start max-w-xl'>
              <h1 className='text-7xl'>Работайте в удовольствие.</h1>
              <h2 className='text-2xl'>
                Пишите, планируйте и организуйте работу в NextNote.
              </h2>
              <Button
                className='font-medium'
                variant={'default'}
              >
                Попробуйте бессплатно
              </Button>
            </div>
            <div className='ml-32'>
              <Image
                src={hero}
                alt={''}
                priority={true}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>

          <div className='py-16'>
            <h2 className='text-6xl font-medium mb-8'>Начни сейчас</h2>

            <p className='text-lg text-gray-500 mb-20'>
              Фиксируйте идеи, работайте с командой и наслаждайтесь.
            </p>

            <div className='flex gap-12 justify-between'>
              <Image
                src={idea}
                alt={''}
                priority={false}
                style={{
                  width: '400px',
                  height: 'auto',
                }}
              />

              <div>
                <ul className='flex gap-12'>
                  <li>
                    <div>Какой-то контент</div>
                    <p>Умный текст</p>
                  </li>
                  <li>
                    <div>Какой-то контент</div>
                    <p>Умный текст</p>
                  </li>
                  <li>
                    <div>Какой-то контент</div>
                    <p>Умный текст</p>
                  </li>
                  <li>
                    <div>Какой-то контент</div>
                    <p>Умный текст</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </MainLayout>
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
