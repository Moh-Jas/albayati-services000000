"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Car,
  Truck,
  Wrench,
  GraduationCap,
  UserCheck,
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  Instagram,
  Linkedin,
  Globe,
  Code,
  Stethoscope,
  Languages,
  Users,
  Award,
  BookOpen,
  Briefcase,
} from "lucide-react"

export default function AlBayatiServices() {
  const [activeSection, setActiveSection] = useState("home")

  const services = [
    {
      title: "العلاج الطبيعي",
      description: "خدمات العلاج الطبيعي المتخصصة والمهنية",
      icon: Heart,
      gradient: "from-red-500 to-pink-600",
      bgImage: "bg-gradient-to-br from-red-50 to-pink-50",
    },
    {
      title: "النقل بالسيارات",
      description: "خدمات النقل الآمنة والمريحة بالسيارات",
      icon: Car,
      gradient: "from-blue-500 to-cyan-600",
      bgImage: "bg-gradient-to-br from-blue-50 to-cyan-50",
    },
    {
      title: "النقل بالتوك توك",
      description: "خدمات النقل السريعة والاقتصادية",
      icon: Truck,
      gradient: "from-green-500 to-emerald-600",
      bgImage: "bg-gradient-to-br from-green-50 to-emerald-50",
    },
    {
      title: "صيانة الأجهزة الإلكترونية",
      description: "صيانة جميع الأجهزة المنزلية والهواتف",
      icon: Wrench,
      gradient: "from-orange-500 to-amber-600",
      bgImage: "bg-gradient-to-br from-orange-50 to-amber-50",
    },
    {
      title: "شركة البياتي للنقل",
      description: "شركة نقل متخصصة وموثوقة",
      icon: Truck,
      gradient: "from-purple-500 to-violet-600",
      bgImage: "bg-gradient-to-br from-purple-50 to-violet-50",
    },
    {
      title: "دورات طبية تعليمية",
      description: "دورات طبية احترافية وحديثة",
      icon: GraduationCap,
      gradient: "from-indigo-500 to-blue-600",
      bgImage: "bg-gradient-to-br from-indigo-50 to-blue-50",
    },
    {
      title: "مدرسين خصوصيين",
      description: "مدرسين مؤهلين لجميع المراحل التعليمية",
      icon: UserCheck,
      gradient: "from-teal-500 to-cyan-600",
      bgImage: "bg-gradient-to-br from-teal-50 to-cyan-50",
    },
  ]

  const skills = [
    { name: "البرمجة", icon: Code, level: 90 },
    { name: "الطب", icon: Stethoscope, level: 85 },
    { name: "اللغة الإنجليزية", icon: Languages, level: 88 },
    { name: "مهارات التواصل", icon: Users, level: 92 },
    { name: "القيادة", icon: Award, level: 87 },
    { name: "التعليم", icon: BookOpen, level: 89 },
  ]

  const socialLinks = [
    {
      name: "Telegram",
      handle: "@ha_20_ha",
      icon: MessageCircle,
      color: "bg-blue-500 hover:bg-blue-600",
      url: "https://t.me/ha_20_ha",
    },
    {
      name: "Facebook",
      handle: "صفحة الفيسبوك",
      icon: Facebook,
      color: "bg-blue-600 hover:bg-blue-700",
      url: "#",
    },
    {
      name: "Instagram",
      handle: "انستغرام",
      icon: Instagram,
      color: "bg-pink-500 hover:bg-pink-600",
      url: "#",
    },
    {
      name: "LinkedIn",
      handle: "لينكد إن",
      icon: Linkedin,
      color: "bg-blue-700 hover:bg-blue-800",
      url: "#",
    },
  ]

  const renderHome = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl text-white">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          خدمات البياتي
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          نقدم مجموعة شاملة من الخدمات المتخصصة والمهنية لتلبية جميع احتياجاتكم
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
          >
            استكشف خدماتنا
          </Button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${service.bgImage} border-0 overflow-hidden`}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <Button
                  variant="outline"
                  className="mt-6 border-2 hover:bg-gray-800 hover:text-white transition-colors duration-300 bg-transparent"
                >
                  اعرف المزيد
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-300">عميل راضٍ</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400 mb-2">7</div>
            <div className="text-gray-300">خدمات متخصصة</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">2+</div>
            <div className="text-gray-300">سنوات خبرة</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-300">دعم متواصل</div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAbout = () => (
    <div className="space-y-12">
      {/* Personal Info */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold">
            HB
          </div>
          <div className="flex-1 text-center lg:text-right">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              حسام البياتي
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              طالب طب في جامعة المستنصرية، مبرمج متخصص، ومقدم خدمات متنوعة. أعمل كمندوب منذ سنتين وأسعى لتقديم أفضل
              الخدمات للعملاء.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Badge className="bg-blue-500 text-white px-4 py-2 text-sm">طالب طب</Badge>
              <Badge className="bg-green-500 text-white px-4 py-2 text-sm">مبرمج</Badge>
              <Badge className="bg-purple-500 text-white px-4 py-2 text-sm">مندوب خبير</Badge>
              <Badge className="bg-orange-500 text-white px-4 py-2 text-sm">مقدم خدمات</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">المهارات والخبرات</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">{skill.name}</h4>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Experience */}
      <div className="bg-gray-50 rounded-3xl p-12">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">الخبرة العملية</h3>
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">طالب طب - جامعة المستنصرية</h4>
              <p className="text-gray-600">دراسة الطب والتخصص في المجال الطبي مع التركيز على التميز الأكاديمي</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">مندوب - سنتان من الخبرة</h4>
              <p className="text-gray-600">خبرة واسعة في التعامل مع العملاء وتقديم الخدمات المتميزة</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">مبرمج ومطور</h4>
              <p className="text-gray-600">تطوير التطبيقات والمواقع الإلكترونية باستخدام أحدث التقنيات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContact = () => (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">تواصل معنا</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا عبر القنوات التالية
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon
          return (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full ${link.color} flex items-center justify-center transition-transform duration-300 hover:scale-110`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{link.name}</h3>
                <p className="text-gray-600 mb-4">{link.handle}</p>
                <Button
                  variant="outline"
                  className="w-full hover:bg-gray-800 hover:text-white transition-colors duration-300 bg-transparent"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  تواصل الآن
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Contact Form */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">أرسل رسالة</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="الاسم الكامل"
                className="w-full p-4 rounded-xl border-0 bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full p-4 rounded-xl border-0 bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="الموضوع"
              className="w-full p-4 rounded-xl border-0 bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <textarea
              placeholder="الرسالة"
              rows={6}
              className="w-full p-4 rounded-xl border-0 bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            ></textarea>
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 text-lg"
            >
              إرسال الرسالة
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-8 bg-blue-50 rounded-2xl">
          <Phone className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h4 className="text-lg font-semibold mb-2 text-gray-800">اتصل بنا</h4>
          <p className="text-gray-600">+964 XXX XXX XXXX</p>
        </div>

        <div className="text-center p-8 bg-green-50 rounded-2xl">
          <Mail className="w-12 h-12 mx-auto mb-4 text-green-600" />
          <h4 className="text-lg font-semibold mb-2 text-gray-800">راسلنا</h4>
          <p className="text-gray-600">info@albayati.com</p>
        </div>

        <div className="text-center p-8 bg-purple-50 rounded-2xl">
          <MapPin className="w-12 h-12 mx-auto mb-4 text-purple-600" />
          <h4 className="text-lg font-semibold mb-2 text-gray-800">موقعنا</h4>
          <p className="text-gray-600">بغداد، العراق</p>
        </div>
      </div>
    </div>
  )

  const renderAboutSite = () => (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">حول الموقع</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          موقع خدمات البياتي هو منصة شاملة تهدف إلى تقديم مجموعة متنوعة من الخدمات المتخصصة والمهنية
        </p>
      </div>

      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              رؤيتنا
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              نسعى لأن نكون الخيار الأول للعملاء في الحصول على خدمات متميزة وموثوقة في جميع المجالات التي نقدمها.
            </p>

            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              مهمتنا
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              تقديم خدمات عالية الجودة تلبي احتياجات عملائنا وتتجاوز توقعاتهم من خلال فريق متخصص ومتفان.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 rounded-2xl p-6">
              <Globe className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2">خدمات شاملة</h4>
              <p className="text-gray-300">نقدم مجموعة واسعة من الخدمات لتلبية جميع احتياجاتكم</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <Award className="w-8 h-8 text-green-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2">جودة عالية</h4>
              <p className="text-gray-300">نلتزم بأعلى معايير الجودة في جميع خدماتنا</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <Users className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2">فريق متخصص</h4>
              <p className="text-gray-300">فريق من المتخصصين ذوي الخبرة والكفاءة العالية</p>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for future content */}
      <div className="bg-gray-50 rounded-3xl p-12 text-center">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">المزيد من المعلومات</h3>
        <p className="text-gray-600 text-lg mb-8">هذا القسم جاهز لإضافة المزيد من المعلومات حول الموقع والخدمات</p>
        <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-300">
          <p className="text-gray-500 italic">"سيتم ملء هذا القسم لاحقاً بالمعلومات الإضافية التي تريد إضافتها"</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      {/* Navigation */}
      <nav className="bg-gray-900 shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8 space-x-reverse">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                خدمات البياتي
              </div>
            </div>

            <div className="hidden md:flex space-x-8 space-x-reverse">
              {[
                { id: "home", label: "الرئيسية" },
                { id: "about", label: "نبذة تعريفية" },
                { id: "contact", label: "تواصل معنا" },
                { id: "about-site", label: "حول الموقع" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeSection === "home" && renderHome()}
        {activeSection === "about" && renderAbout()}
        {activeSection === "contact" && renderContact()}
        {activeSection === "about-site" && renderAboutSite()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                خدمات البياتي
              </h3>
              <p className="text-gray-300 leading-relaxed">
                نقدم خدمات متميزة ومتنوعة لتلبية جميع احتياجاتكم بأعلى معايير الجودة والمهنية.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
              <ul className="space-y-2 text-gray-300">
                <li>العلاج الطبيعي</li>
                <li>خدمات النقل</li>
                <li>صيانة الأجهزة</li>
                <li>الدورات التعليمية</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon
                  return (
                    <a
                      key={index}
                      href={link.url}
                      className={`w-10 h-10 rounded-full ${link.color} flex items-center justify-center transition-transform duration-300 hover:scale-110`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 خدمات البياتي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
