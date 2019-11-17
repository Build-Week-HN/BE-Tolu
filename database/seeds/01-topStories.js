exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("topStories")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("topStories").insert([
        {
          id: 1,
          article_id: 21546682,
          title:
            "Wikipedia's Jimmy Wales has quietly launched a Facebook rival social network",
          url:
            "https://www.zdnet.com/article/wikipedias-jimmy-wales-has-quietly-launched-a-facebook-rival-social-network/",
          descendants: 71,
          score: 97,
          by: "cpeterso",
          type: "story"
        },
        {
          id: 2,
          article_id: 21544864,
          title: "Pointless work meetings 'really a form of therapy'",
          url: "https://www.bbc.com/news/education-50418317",
          descendants: 122,
          score: 255,
          by: "DarkContinent",
          type: "story"
        },
        {
          id: 3,
          article_id: 21545493,
          title:
            "How to motivate people? Talk about the context of the work to be done",
          url: "https://www.sametab.com/blog/employee-engagement",
          descendants: 37,
          score: 135,
          by: "anacleto",
          type: "story"
        },
        {
          id: 4,
          article_id: 21545145,
          title: "Sourcehut's Year in Alpha",
          url: "https://sourcehut.org/blog/2019-11-15-sourcehut-1-year-alpha/",
          descendants: 42,
          score: 209,
          by: "ddevault",
          type: "story"
        },
        {
          id: 5,
          article_id: 21537528,
          title:
            "Amazon’s quest for more, cheaper products has resulted in a flea market of fakes",
          url:
            "https://www.washingtonpost.com/technology/2019/11/14/how-amazons-quest-more-cheaper-products-has-resulted-flea-market-fakes/",
          descendants: 89,
          score: 154,
          by: "drfuchs",
          type: "story"
        },
        {
          id: 6,
          article_id: 21547312,
          title:
            "Near-BERT accuracy on Sentiment Analysis with a model 56 times smaller",
          url: "https://blog.floydhub.com/knowledge-distillation/",
          descendants: 0,
          score: 8,
          by: "alexamadoriml",
          type: "story"
        },
        {
          id: 7,
          article_id: 21546534,
          title:
            "Yelp open-sources Clusterman, a cluster autoscaler for Kubernetes and Mesos",
          url:
            "https://engineeringblog.yelp.com/2019/11/open-source-clusterman.html",
          descendants: 2,
          score: 21,
          by: "drmorr",
          type: "story"
        },
        {
          id: 8,
          article_id: 21545291,
          title:
            "Show HN: Scholarref tools – never deal with journal webpages again",
          url: "https://adamsgaard.dk/scholarref.html",
          descendants: 3,
          score: 76,
          by: "admsg",
          type: "story"
        },
        {
          id: 9,
          article_id: 21543377,
          title:
            "Which answer in this list is the correct answer to this question? (2017)",
          url:
            "https://math.stackexchange.com/questions/2217248/which-answer-in-this-list-is-the-correct-answer-to-this-question",
          descendants: 92,
          score: 346,
          by: "akakievich",
          type: "story"
        },
        {
          id: 10,
          article_id: 21545830,
          title: "9 year old to graduate university",
          url:
            "https://www.cnn.com/2019/11/14/europe/university-graduate-child-genius-scli-intl/index.html",

          descendants: 73,
          score: 87,
          by: "codegeek",
          type: "story"
        },
        {
          id: 11,
          article_id: 21544537,
          title:
            "How Google uses blacklists, algorithm tweaks and contractors for search results",
          url:
            "https://www.msn.com/en-us/money/companies/how-google-interferes-with-its-search-algorithms-and-changes-your-results/ar-BBWOCm2",

          descendants: 98,
          score: 122,
          by: "tysone",
          type: "story"
        },
        {
          id: 12,
          article_id: 21544947,
          title:
            "What is the “two-drive trick” that can read Amiga disks on a PC?",
          url:
            "https://retrocomputing.stackexchange.com/questions/12747/what-is-the-two-drive-trick-that-can-read-amiga-disks-on-a-pc",

          descendants: 13,
          score: 73,
          by: "_Microft",
          type: "story"
        },
        {
          id: 13,
          article_id: 21535056,
          title:
            "LLVM-tutor: collection of out-of-tree LLVM examples for teaching and learning",
          url: "https://github.com/banach-space/llvm-tutor",

          descendants: 1,
          score: 48,
          by: "matt_d",
          type: "story"
        },
        {
          id: 14,
          article_id: 21545703,
          title: "Show HN: Simple PDF to PNG Server",
          url:
            "https://secureview.cloudbrowser.xyz/secretpage-canneverbefound.html",

          descendants: 36,
          score: 41,
          by: "slowenough",
          type: "story"
        },
        {
          id: 15,
          article_id: 21542054,
          title: "Eigenvectors from eigenvalues",
          url:
            "https://terrytao.wordpress.com/2019/08/13/eigenvectors-from-eigenvalues/",

          descendants: 77,
          score: 449,
          by: "bigpumpkin",
          type: "story"
        },
        {
          id: 16,
          article_id: 21534199,
          title: "Exploiting Intel’s Management Engine",
          url:
            "https://kakaroto.homelinux.net/2019/11/exploiting-intels-management-engine-part-1-understanding-pts-txe-poc/",

          descendants: 32,
          score: 135,
          by: "DyslexicAtheist",
          type: "story"
        },
        {
          id: 17,
          article_id: 21546735,
          title: "SimplyNUC Unveils Sequoia: AMD Ryzen V-Series-Based UCFF PC",
          url:
            "https://www.anandtech.com/show/15103/simplynuc-unveils-sequoia-amd-ryzen-vseriesbased-ucff-pc",

          descendants: 2,
          score: 15,
          by: "NicoJuicy",
          type: "story"
        },
        {
          id: 18,
          article_id: 21534133,
          title: "If you're busy, you're doing something wrong (2011)",
          url:
            "http://calnewport.com/blog/2011/11/11/if-youre-busy-youre-doing-something-wrong-the-surprisingly-relaxed-lives-of-elite-achievers/",

          descendants: 136,
          score: 430,
          by: "unpredict",
          type: "story"
        },
        {
          id: 19,
          article_id: 21546437,
          title: "Vanta (YC W18) Is Hiring Customer Success Managers in SF",
          url: "https://vanta.com/jobs",

          descendants: 2,
          score: 1,
          by: "christinac",
          type: "job"
        },
        {
          id: 20,
          article_id: 21531507,
          title: "Flight 1080 (1978) [pdf]",
          url: "https://www.tristar500.net/library/flight1080.pdf",

          descendants: 16,
          score: 34,
          by: "ColinWright",
          type: "story"
        }
      ]);
    });
};
