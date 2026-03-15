"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitTestimonial from "@/components/sections/hero/HeroSplitTestimonial";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MediaAbout from "@/components/sections/about/MediaAbout";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import BlogCardThree from "@/components/sections/blog/BlogCardThree";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Shield, CheckCircle, Wrench, Award, TrendingUp, MapPin, Zap, MessageSquare, Camera } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="largeSmall"
      background="blurBottom"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Cincinnati Advanced Roofing"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Why Us", id: "why-us" },
            { name: "Service Areas", id: "areas" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Call Now", href: "tel:+15139999999" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Cincinnati's Trusted Roofing Experts"
          description="Emergency Roof Repair, Replacement & Storm Damage Restoration. Licensed, Insured & Available 24/7"
          tag="Local Roofing Service"
          tagIcon={Shield}
          tagAnimation="slide-up"
          buttons={[
            { text: "Call Now - (513) 999-9999", href: "tel:+15139999999" },
            { text: "Get Free Roof Estimate", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/construction-worker-doing-his-job-with-belt_23-2149343658.jpg"
          imageAlt="Professional roofers installing residential roof"
          mediaAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          useInvertedBackground={false}
          testimonials={[
            {
              name: "Sarah Johnson",              handle: "@cincyhomeowner",              testimonial: "They installed our new roof incredibly fast when we had an urgent leak. Professional and affordable!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiley-senior-woman-posing-inside-medium-shot_23-2149833721.jpg",              imageAlt: "Sarah Johnson - Cincinnati homeowner"
            },
            {
              name: "Michael Chen",              handle: "@satisfiedclient",              testimonial: "Outstanding work on our storm damage repairs. The team was efficient and the quality exceeded expectations.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-working-reception_23-2149963923.jpg",              imageAlt: "Michael Chen - Satisfied customer"
            },
            {
              name: "Emily Rodriguez",              handle: "@homeimprovepro",              testimonial: "Best roofing company in Cincinnati. Honest estimates, licensed crew, and they cleaned up after themselves.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",              imageAlt: "Emily Rodriguez - Home improvement professional"
            },
            {
              name: "David Kim",              handle: "@cincinnatiowner",              testimonial: "Emergency roof repair at midnight. They showed up, fixed it right, and stood behind their work. Highly recommend!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/blonde-woman-showing-thumb-up-red-blouse-looking-happy_176474-19768.jpg",              imageAlt: "David Kim - Cincinnati homeowner"
            }
          ]}
          testimonialRotationInterval={6000}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "40+ Five-Star Reviews",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-senior-woman-posing-inside-medium-shot_23-2149833721.jpg",              imageAlt: "satisfied customer homeowner smiling portrait"
            },
            {
              id: "2",              name: "4.9★ Average Rating",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-working-reception_23-2149963923.jpg",              imageAlt: "homeowner smiling customer satisfied photo"
            },
            {
              id: "3",              name: "Licensed & Insured",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",              imageAlt: "customer portrait professional headshot smiling"
            },
            {
              id: "4",              name: "24-Hour Emergency Service",              imageSrc: "http://img.b2bpic.net/free-photo/blonde-woman-showing-thumb-up-red-blouse-looking-happy_176474-19768.jpg",              imageAlt: "professional customer testimonial portrait photo"
            }
          ]}
          cardTitle="Trusted by Cincinnati Homeowners"
          cardTag="Local Excellence"
          cardTagIcon={CheckCircle}
          cardAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSixteen
          title="Our Roofing Services"
          description="Comprehensive roofing solutions for every need - from emergency repairs to complete roof replacements and gutter installations."
          tag="Professional Solutions"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          negativeCard={{ items: ["Emergency Roof Repairs", "Roof Replacement", "Leak Detection & Repair", "Shingle Installation"] }}
          positiveCard={{ items: ["Storm Damage Restoration", "Insurance Claim Assistance", "Gutter Installation & Repair", "Roof Inspections"] }}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="why-us" data-section="why-us">
        <MediaAbout
          title="Why Choose Cincinnati Advanced Roofing"
          description="With years of experience serving the Cincinnati area, we've built our reputation on honest estimates, superior craftsmanship, and exceptional customer service. Our licensed, insured team is available 24/7 for emergency repairs."
          tag="Local Expertise"
          tagIcon={Award}
          tagAnimation="blur-reveal"
          buttons={[{ text: "Schedule Free Inspection", href: "#contact" }]}
          buttonAnimation="blur-reveal"
          imageSrc="http://img.b2bpic.net/free-photo/construction-worker-doing-his-job-with-belt_23-2149343658.jpg"
          imageAlt="Our roofing team on site"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          title="Proven Track Record"
          description="Cincinnati Advanced Roofing has earned the trust of thousands of homeowners across the greater Cincinnati area."
          tag="Success Stories"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              value: "40+",              title: "Five-Star Reviews",              description: "Consistent excellence in customer satisfaction and service quality"
            },
            {
              id: "2",              value: "4.9★",              title: "Average Rating",              description: "Maintained high standards across all roofing projects and repairs"
            },
            {
              id: "3",              value: "1000+",              title: "Roofs Serviced",              description: "Years of experience across residential roofing in Cincinnati"
            },
            {
              id: "4",              value: "24/7",              title: "Emergency Service",              description: "Always available when your roof needs urgent attention"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="service-areas" data-section="service-areas">
        <BlogCardThree
          title="Service Areas"
          description="We proudly serve homeowners throughout greater Cincinnati, Ohio. If your neighborhood isn't listed, contact us - we likely serve your area!"
          tag="Local Coverage"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          blogs={[
            {
              id: "1",              category: "West Chester",              title: "West Chester Roofing Services",              excerpt: "Fast, reliable roofing solutions for West Chester homeowners. Emergency repairs available 24/7.",              imageSrc: "http://img.b2bpic.net/free-vector/infographic-australia-map-linear-design_23-2148724473.jpg",              imageAlt: "West Chester, Ohio service area",              authorName: "Cincinnati Advanced Roofing",              authorAvatar: "http://img.b2bpic.net/free-photo/smiley-senior-woman-posing-inside-medium-shot_23-2149833721.jpg",              date: "Serving Daily"
            },
            {
              id: "2",              category: "Mason",              title: "Mason & Fairfield Roofing",              excerpt: "Expert roof replacement and repair services for Mason and Fairfield communities.",              imageSrc: "http://img.b2bpic.net/free-vector/infographic-australia-map-linear-design_23-2148724473.jpg",              imageAlt: "Mason, Ohio service area",              authorName: "Cincinnati Advanced Roofing",              authorAvatar: "http://img.b2bpic.net/free-photo/front-view-woman-working-reception_23-2149963923.jpg",              date: "Serving Daily"
            },
            {
              id: "3",              category: "Blue Ash",              title: "Blue Ash & Sharonville Roofing",              excerpt: "Trusted roofing contractor for Blue Ash, Sharonville, and Forest Park homeowners.",              imageSrc: "http://img.b2bpic.net/free-vector/infographic-australia-map-linear-design_23-2148724473.jpg",              imageAlt: "Blue Ash, Ohio service area",              authorName: "Cincinnati Advanced Roofing",              authorAvatar: "http://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",              date: "Serving Daily"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="cta-banner" data-section="cta-banner">
        <ContactCTA
          tag="Limited Time Offer"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Need Roof Repair Fast?"
          description="Call now for a FREE roof inspection and honest estimate. Available 24/7 for emergency repairs and storm damage."
          buttons={[
            { text: "Call Now (513) 999-9999", href: "tel:+15139999999" },
            { text: "Request Free Estimate", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <ProductCardTwo
          title="Our Work"
          description="See examples of our completed roofing projects throughout Cincinnati. From emergency repairs to full replacements, we deliver quality results."
          tag="Project Portfolio"
          tagIcon={Camera}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",              brand: "Before & After",              name: "Roof Replacement",              price: "Complete Transformation",              rating: 5,
              reviewCount: "Excellent Result",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-roof-house-made-wooden-tiles_169016-25417.jpg",              imageAlt: "damaged roof before replacement project"
            },
            {
              id: "2",              brand: "Complete Project",              name: "Storm Damage Restoration",              price: "Fully Restored",              rating: 5,
              reviewCount: "Same-Day Service",              imageSrc: "http://img.b2bpic.net/free-photo/low-view-man-working-roof-with-drill_23-2148748773.jpg",              imageAlt: "storm damage roof repair hail wind"
            },
            {
              id: "3",              brand: "Quality Installation",              name: "Gutter System Install",              price: "Professional Grade",              rating: 5,
              reviewCount: "Lifetime Quality",              imageSrc: "http://img.b2bpic.net/free-photo/back-view-male-musician-roof-top-holding-electric-guitar_23-2148680355.jpg",              imageAlt: "seamless gutter installation residential home"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get Your Free Estimate"
          tagIcon={MessageSquare}
          tagAnimation="blur-reveal"
          title="Contact Cincinnati Advanced Roofing"
          description="Call or submit your information below for a FREE roof inspection and honest estimate. Our team responds within 2 hours. Emergency services available 24/7."
          buttons={[
            { text: "Call Now (513) 999-9999", href: "tel:+15139999999" },
            { text: "Email: info@cincinnatiadvancedroofing.com", href: "mailto:info@cincinnatiadvancedroofing.com" }
          ]}
          buttonAnimation="blur-reveal"
          background={{ variant: "plain" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Cincinnati Advanced Roofing"
          copyrightText="© 2025 Cincinnati Advanced Roofing Company. All rights reserved."
          columns={[
            {
              title: "Services",              items: [
                { label: "Roof Repair", href: "#services" },
                { label: "Roof Replacement", href: "#services" },
                { label: "Storm Damage Repair", href: "#services" },
                { label: "Gutter Installation", href: "#services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#why-us" },
                { label: "Service Areas", href: "#service-areas" },
                { label: "Contact", href: "#contact" },
                { label: "Emergency Service", href: "tel:+15139999999" }
              ]
            },
            {
              title: "Contact Info",              items: [
                { label: "Phone: (513) 999-9999", href: "tel:+15139999999" },
                { label: "Address: 5146 Duff Dr #742, Cincinnati, OH 45246", href: "#" },
                { label: "Hours: 24/7 Service Available", href: "#" },
                { label: "Licensed & Insured", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
