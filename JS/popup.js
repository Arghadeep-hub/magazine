swal({
  title: "আপনি কি নিশ্চিত?",
  text: "আপনি কি আমাদের পত্রিকায় প্রথম আসছেন?",
  icon: "warning",
  buttons: ["No", "Yes"],
  dangerMode: true,
}).then((willDelete) => {
  if (willDelete) {
    swal("অন্যান্য বিকল্পের জন্য পৃষ্ঠার উপরের ডানদিকে Menu-তে ক্লিক করুন।", {
      icon: "success",
    });
  } else {
    swal("পুনরায়, রুখামাটি সাহিত্য পত্রিকায় আসার জন্য ধন্যবাদ।");
  }
});