import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/blog/Section1";
import Section2 from "@/components/sections/blog/Section2";
import Section4 from "@/components/sections/home/Section4";
import Section6 from "@/components/sections/about/Section6";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Articles & News" current_page="Our Blog" />
                <Section1 />
                <Section2 />
                <Section4 />
                <Section6 />
            </Layout>
        </>
    );
}
