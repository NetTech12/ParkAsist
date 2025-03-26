import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Header from "../../Components/Header";
import authBanner from "../../assets/hero.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom"; 


const Login = () => {
    const { login, error, user } = useContext(AuthContext); 
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Kullanıcı adı ve şifre boş mu?
        if (!credentials.username.trim() || !credentials.password.trim()) {
            alert("Kullanıcı adı ve şifre zorunludur!");
            return;
        }
    
        // reCAPTCHA doğrulandı mı?
        if (!recaptchaValue) {
            alert("Lütfen robot olmadığınızı doğrulayın.");
            return;
        }
    
        // Giriş işlemi başlat
        login(credentials.username, credentials.password);
    };
    
    if (user) {
        navigate("/carpark");
    }

    return (
        <div className="">
        <Header title="Oturum Aç" bgImage={authBanner} style={{ height: "100px" }} />
        <style>
    {`
        .page-header .title-wrap {
            transform: translateY(70%) !important; 
          }
        `}
  </style>
            <div className="container my-auto mx-auto px-6 md:px-20 py-12">
                <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Giriş Yap</h2>

                        {error && <p className="text-red-500 text-center">{error}</p>}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username"  className="block text-start text-md font-semibold text-gray-700 mb-1">
                                    Kullanıcı Adı
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={credentials.username}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Kullanıcı adınızı girin"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-start text-md font-semibold text-gray-700 mb-1">
                                    Şifre
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Şifrenizi girin"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                        Beni hatırla
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                        Şifremi unuttum?
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mx-auto">
                                <ReCAPTCHA sitekey="6LfelQArAAAAAGqj4CdqlRH-B8l0vXeiaEL3-aZK" onChange={handleRecaptchaChange} />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Giriş Yap
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
