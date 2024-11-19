import { TypeAnimation } from 'react-type-animation';

export default function TextAnimation(){
    return(
        <h4 className="fw-semibold text-white mb-4"><br/>Selamat Datang Di <br/>Mitsubishi Jakarta Pusat...
            <TypeAnimation
                sequence={[
                    'Keamanan',
                    2000,
                    'Kepercayaan',
                    2000,
                    'Kenyamanan',
                    2000,
                    'Ketepatan',
                    2000,
                    'Kemudahan',
                    2000,
                ]}
                wrapper="span"
                speed={10}
                className="text-teal-400 typewrite ms-1"
                repeat={Infinity}
                cursor={false}
            />
        </h4>
    )
}
