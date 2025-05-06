export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">About BiddersPro</h1>
      
      <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-lg shadow-lg">
        <p className="mb-6 text-gray-200">
          At BiddersPro, we specialize in automating freelance and B2B processes, helping professionals scale their businesses efficiently.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8 text-purple-400">Our Mission</h2>
        <p className="mb-6 text-gray-200">
          Our mission is to transform how freelancers and businesses approach client acquisition, allowing them to focus on delivering exceptional work rather than spending time on manual bidding and prospecting.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 mt-8 text-purple-400">What We Do</h2>
        <p className="mb-6 text-gray-200">
          We provide automation tools that streamline the process of finding and securing high-quality clients. Our solutions help you:
        </p>
        
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-200">
          <li>Automate your Upwork bidding process</li>
          <li>Target high-value B2B clients</li>
          <li>Scale your business without increasing manual work</li>
          <li>Optimize your profile and proposals for better conversion</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 mt-8 text-purple-400">Our Team</h2>
        <p className="mb-6 text-gray-200">
          Founded by experts with extensive experience in freelancing and business automation, our team understands the challenges freelancers face and builds solutions to address them effectively.
        </p>
      </div>
    </div>
  );
} 