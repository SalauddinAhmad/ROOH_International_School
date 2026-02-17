import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Eye, ArrowLeft, User, MessageCircle, Send } from 'lucide-react';

// Article data - in a real app, this would come from an API or database
const articlesData = [
  {
    id: 1,
    title: "New Science Laboratory Inaugurated with State-of-the-Art Equipment",
    content: "The new science laboratory at ROOH International School represents a significant milestone in our commitment to providing world-class education. Equipped with the latest scientific instruments, interactive displays, and safety equipment, this facility will enable our students to conduct hands-on experiments and develop a deeper understanding of scientific concepts.\n\nThe laboratory includes dedicated spaces for biology, chemistry, and physics experiments, with each station designed to accommodate small groups for collaborative learning. Advanced microscopes, digital measuring instruments, and interactive whiteboards create an environment where theoretical knowledge meets practical application.\n\nOur science teachers have undergone specialized training to maximize the potential of these new resources, ensuring that students receive the best possible guidance in their scientific journey. The laboratory also features safety protocols and equipment that meet international standards, providing a secure learning environment for all students.\n\nThis investment in our facilities demonstrates our ongoing commitment to excellence in education and our belief in the importance of hands-on learning in developing critical thinking and problem-solving skills.\n\nThe inauguration ceremony was attended by parents, students, and distinguished guests from the educational community. Students were excited to explore the new equipment and immediately began planning their first experiments.\n\nWe believe this new facility will inspire a new generation of young scientists and researchers, contributing to Bangladesh's future in science and technology.",
    image: "https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg",
    date: "2024-01-15",
    category: "Facilities",
    readTime: "4 min read",
    author: "Dr. Aminul Islam",
    views: 245
  },
  {
    id: 2,
    title: "Annual Sports Day 2024 - Celebrating Athletic Excellence",
    content: "The Annual Sports Day 2024 was a spectacular display of athletic prowess, teamwork, and school spirit. Students from Playgroup to Grade 5 participated in various events including track and field, relay races, football, and traditional games.\n\nThe event emphasized participation over competition, with every student receiving recognition for their efforts. Parents and teachers cheered enthusiastically as young athletes demonstrated not only their physical abilities but also values of fair play and mutual respect.\n\nHighlights of the day included the 100-meter dash finals, the exciting relay races, and the creative march-past presentations by each class. The event concluded with an awards ceremony where medals and certificates were distributed to all participants.\n\nThis annual tradition continues to be one of our most anticipated events, fostering a love for sports and physical fitness among our students while building confidence and team spirit.\n\nThe sports day also featured special performances by our school band and dance troupe, adding to the festive atmosphere. Parents were invited to participate in special events, creating a true community celebration.\n\nWe are proud of all our students who participated with such enthusiasm and sportsmanship, embodying the values we strive to instill at ROOH International School.",
    image: "https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg",
    date: "2024-01-12",
    category: "Events",
    readTime: "3 min read",
    author: "Ms. Sarah Johnson",
    views: 189
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting Schedule for February 2024",
    content: "The Parent-Teacher Meetings for February 2024 provide an excellent opportunity for parents to engage directly with teachers and understand their child's academic progress, social development, and areas for improvement.\n\nIndividual consultation slots are available for detailed discussions about each student's learning journey. These meetings are crucial for maintaining strong home-school partnerships that support student success.\n\nDuring these sessions, teachers will share insights about your child's strengths, areas for growth, and strategies for continued improvement. Parents are encouraged to discuss any concerns and collaborate on plans to support their child's development.\n\nScheduling information and time slots will be shared via our parent portal and school communication channels. We encourage all parents to take advantage of this valuable opportunity to connect with their child's teachers.\n\nThe meetings will be held in individual classrooms, allowing parents to see their child's learning environment firsthand. Teachers will have student portfolios and assessment records available for review.\n\nWe look forward to productive conversations that will benefit our students' continued growth and success.",
    image: "https://images.pexels.com/photos/8612986/pexels-photo-8612986.jpeg",
    date: "2024-01-10",
    category: "Notices",
    readTime: "2 min read",
    author: "Administrative Office",
    views: 156
  },
  {
    id: 4,
    title: "Student Art Exhibition Showcases Creative Talents",
    content: "The Student Art Exhibition features an impressive collection of paintings, drawings, sculptures, and mixed-media artwork created by our talented Grade 4 students.\n\nThe exhibition showcases the diverse artistic abilities and creative thinking fostered through our comprehensive arts curriculum. Visitors can explore themes ranging from nature and family to abstract expressions of emotion and dreams.\n\nEach piece reflects the unique perspective and developing skills of our young artists, demonstrating the importance of creative expression in holistic education. The exhibition will remain open for viewing throughout the month, with guided tours available for interested families.\n\nThis celebration of creativity highlights our commitment to nurturing all aspects of student development, recognizing that artistic expression plays a vital role in building confidence and communication skills.\n\nThe exhibition includes works in various mediums including watercolors, acrylics, clay sculptures, and digital art. Students worked on these pieces throughout the semester, learning different techniques and exploring their creative voices.\n\nWe invite all families and community members to visit and celebrate the artistic achievements of our students.",
    image: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg",
    date: "2024-01-08",
    category: "Arts",
    readTime: "3 min read",
    author: "Ms. Emily Davis",
    views: 134
  },
  {
    id: 5,
    title: "Digital Learning Initiative Launches New Online Platform",
    content: "Our new digital learning platform integrates seamlessly with classroom instruction to provide students with interactive educational content, virtual field trips, and collaborative projects.\n\nTeachers can now assign multimedia homework, track student progress in real-time, and provide personalized feedback. Parents also have access to monitor their child's learning journey through dedicated dashboards.\n\nThe platform includes educational games, interactive simulations, and digital resources that make learning more engaging and effective. Students can access materials from home, enabling continuous learning beyond school hours.\n\nThis initiative represents our commitment to preparing students for a digital future while maintaining the personal touch that defines quality education.\n\nThe platform features age-appropriate content for all grade levels, from interactive storytelling for younger students to coding challenges for older ones. Teachers have received comprehensive training to maximize the platform's potential.\n\nWe believe this digital enhancement will complement our traditional teaching methods and provide students with 21st-century skills essential for their future success.",
    image: "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg",
    date: "2024-01-05",
    category: "Technology",
    readTime: "4 min read",
    author: "IT Department",
    views: 198
  },
  {
    id: 6,
    title: "Community Service Project: Helping Local Elderly Care Center",
    content: "Our community service project brought together students, teachers, and families to support the local elderly care center through donations, entertainment programs, and companionship visits.\n\nThis initiative teaches students the importance of social responsibility and caring for community members while developing empathy and leadership skills. Students prepared songs, dances, and art projects to share with the elderly residents.\n\nThe project also included collecting essential items and organizing fundraising activities. Through these experiences, our students learn that education extends beyond academic achievement to include service to others.\n\nSuch initiatives are integral to our mission of developing well-rounded individuals who contribute positively to society.\n\nThe elderly residents were delighted by the students' visits and performances. Many meaningful connections were formed, with students learning valuable life lessons from the seniors' stories and experiences.\n\nWe plan to continue this partnership throughout the year, making community service a regular part of our students' educational experience.",
    image: "https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg",
    date: "2024-01-03",
    category: "Community",
    readTime: "3 min read",
    author: "Student Council",
    views: 167
  }
];

const ArticleView = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Sarah Ahmed",
      date: "2024-01-16",
      content: "This is wonderful news! The new science lab will definitely enhance our children's learning experience."
    },
    {
      id: 2,
      author: "Mohammad Rahman",
      date: "2024-01-16", 
      content: "Great investment in education. Looking forward to seeing how this benefits the students."
    }
  ]);

  // Find the specific article based on the URL parameter
  const article = articlesData.find(a => a.id === parseInt(id || '1'));
  
  // If article not found, show error or redirect
  if (!article) {
    return (
      <div className="pt-20 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#00393C] mb-4">Article Not Found</h1>
          <p className="text-[#303E3F] mb-6">The article you're looking for doesn't exist.</p>
          <Link 
            to="/news"
            className="bg-[#F68949] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#946F5C] transition-colors"
          >
            Back to News & Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "Anonymous User",
        date: new Date().toISOString().split('T')[0],
        content: comment
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-[88px] bg-white">
      {/* Back Navigation */}
      <div className="bg-[#FFE8D2] py-4">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/news"
            className="inline-flex items-center text-[#00393C] hover:text-[#F68949] transition-colors font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News & Blog
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-[#F68949] text-white px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <div className="flex items-center text-[#303E3F] text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(article.date)}
              </div>
              <div className="flex items-center text-[#303E3F] text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime}
              </div>
              <div className="flex items-center text-[#303E3F] text-sm">
                <Eye className="h-4 w-4 mr-1" />
                {article.views} views
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#00393C] mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center text-[#946F5C] font-medium mb-8">
              <User className="h-4 w-4 mr-2" />
              By {article.author}
            </div>

            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-8"
            />
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-[#303E3F] leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-[#303E3F]">
                <p className="font-medium">Published by {article.author}</p>
                <p className="text-sm">{formatDate(article.date)}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-[#303E3F] text-sm">Share this article:</span>
                <div className="flex space-x-2">
                  <button className="bg-[#00393C] text-white p-2 rounded-full hover:bg-[#F68949] transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="bg-[#00393C] text-white p-2 rounded-full hover:bg-[#F68949] transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Comments Section */}
      <section className="py-12 bg-[#FFE8D2]">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-[#00393C] mb-8 flex items-center">
            <MessageCircle className="h-6 w-6 mr-2" />
            Comments ({comments.length})
          </h3>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <h4 className="text-lg font-semibold text-[#00393C] mb-4">Leave a Comment</h4>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts about this article..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent resize-none mb-4"
            />
            <button
              type="submit"
              className="bg-[#F68949] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#946F5C] transition-colors flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Post Comment
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-semibold text-[#00393C]">{comment.author}</h5>
                  <span className="text-[#303E3F] text-sm">{formatDate(comment.date)}</span>
                </div>
                <p className="text-[#303E3F] leading-relaxed">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleView;