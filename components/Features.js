import React from "react";
import Link from "next/link";
import {
  UploadIcon,
  BookOpenIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
const features = [
  {
    name: "Easy to upload Courses",
    description:
      "Monitor your student progress, and earn new revenue streams in crypto",
    icon: UploadIcon,
  },
  {
    name: "NFT Certificates",
    description:
      "Buy a course as an NFT, finish at your own pace, and get an NFT certificate afterwards",
    icon: BookOpenIcon,
  },
  {
    name: "Be part of A Community",
    description:
      "With Primero, as a student and as an instructor, you get to be part of a community",
    icon: UserGroupIcon,
  },
];
const Features = () => {
  return (
    <div>
      <div className="relative bg-gray-100 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="font-bold tracking-wider text-900 uppercase">
              ABOUT
            </h2>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              As a Student, on Primero you can buy a course as an NFT, finish
              the course at your own pace, and get an NFT certificate
              afterwards! You can also list and sell your course as an NFT with
              a first timer purchase advantage!
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              As an Instructor, Primero offers you the first web3 platform to
              upload your courses, monitor your student progress, and earn new
              revenue streams in crypto for the content you created.
            </p>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                      <div className="-mt-2">
                        <div>
                          <div className="inline-flex items-center justify-center rounded-md bg-orange-400 p-3 text-white shadow-lg">
                            <feature.icon
                              className="h-8 w-8"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                          {feature.name}
                        </h3>
                        <p className="mt-5 text-base text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid pt-20">
                <div className="relative bg-gray-0">
                  <div className="relative h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                    {/* <div className="flex items-center space-x-6 lg:space-x-8"> */}
                      {/* <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhIPEhAQFRUPEA8PEA8PDxAQDw8PFREWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGi0gHx0tLS0tLS0rLS0rLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA8EAACAgECBAMGAwUGBwAAAAAAAQIDEQQhBTFBURJhcQYTgZGhsRQiUgdCwdHwIzJygsLhFRYzQ5Ky8f/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACYRAAMBAAIBBAICAwEAAAAAAAABAhEDEiEEEzFBUWFCkTJxsSL/2gAMAwEAAhEDEQA/APGR0MSR0pASUSSiNEuh5m0yMaMSyMS2urK8+m63HUDaYKwhGBdCJOEC+Ne3LrzL9spSRjXkd0BNdYXGgzcYWpMtUk1SaH4cshpX2F10agArozt8vUJ09WdmvIOr0fn8kaNHDk8PPPuivbZrHG2ZS0pVZo/I6qXD8JPHPbK3TKZ6REtG74Tl/wAExLQHR/hCz/hjayZUyPZOWnouXqEx0jxsjoZcFls/oEVcO8K3JV4NcWHIvRy7FN2iZ2z4bndIpjwXOc/JB/kQ+Js42jSPfCDatLhc/gdJLhqr5LqC26dZeO4NYXPDhizqwAzpyzcuoYJbTjkh9vwTUGZqfyrCMmyrfLN63TyeW19gOWmfVB5Rhc6ZDqY3u29kjYWjyP7jGyRLtIj2zKVGNvmP+HNN6dLmDahMhtsTnDO1GFsgdRyFSqzu/wDcjKI+pngM4jYLnAg4iwWFbEO0MIQkTRBE0aSCLIl1SKYhNJ08a8lBFcAqaTUX15MpqLW9vjk6votDwiXwiVVoLhBrmhGiRZTAMrgVUxNHT1Cc6ayhq9MXx0/cIqhgujEuUkaKSOm0qb5GrXpdvsU6aBoURb2LaWHRxrB9DV4s1vlJP4SS2ZV+Bf72IrvLbPoub+BXxDjFWlWU1KbW2N//ABX8XscbxLj197bcmvJN5a83zZjXGn8mfL6qZ8T5Osv1mlp2cvFLty+iy/sZmp9pcPEK1j/DH/VlnLVXhawzSeKPpHK+Wr+zY/5pv6LH+ZfwiU2+1lqxmK+KhL7xMm1pAOquT2X2LcrPhf0iKpr7Ou0ntlDlOuPycH81lfQ3tFxnS2raXhb/AFY8Lf8AiW3zweVjwtcXlNp+RhXFD+v6CPU3P7PYLtOsZwnnl1XqYmt0mHsuZy/Bvam2h4bzHrF7wfw6eqO+4Tr6dWsxeJJZcHjK813XmcfPwVP/AKXlHfw88cvj4ZzroK/wed8HR8Q0Syml6g3u0/yrGF8zHjZrXEc/dpc9Nin8FhctnzXc6KWkb6D/AIaMd5NPHKK7+ZrXJ4M/a8nK3aHDa7fYGspSOh1Vbk2+7yZ2oowcm/giuPDFnBbyfT7mbqtzXuinlP1S88AEqe5tCRy3JmOBXKBpWrbCSXw3YLKstmTkDlEpmgucQeyJLIaB5ECyaKyGZsdEkQRZFlSCJxCqQaJfBnRDwpBkGTzkGiy6BuqLQTWG1NsCqD9NEemshunialMQPSQ3NmiguWdEoWmpbZp18OyslulqSNCqSQ0zWUB0aCRi+0PG1QvdVvMnzffzfl2XU0/abjCoraX957Y7t8o/xfkeb3WubcpPLk8t92NvDm9RzfxQrr5SblJttvdvmyNKbeyz37IVVXifl1YWkksIpTpxlX4VLm8/RF1Vjh/d2+CGlIqbLSwZO21yeWyqTIuRCUihaKcIvp8tiidbXmvqWORFyF1QA78v/gZoeJTokpRk1h5WOafkDzXVcwOcuvbmuxPXyLcPYODcaWtrxLCnBLxJcpL9SJzqweacC4hOqUZxfJ7dvR+TPXuHxr1VUboLHiWGs/3ZLmmeb6niUvtPx/w9j03qPcnrXyjMVRB05Na3QtAtkMHnW/J2YZl1IBfRk2bY9XsjP1Tb2itu/cJM7lGDqakvN/RGbdWuxr6miXbPphv5IzLU+xS1HDZn2wQLaHXRAbkaps56QHYDWBNgLYxmLB5lTLZlTAzYkTRBFiKkSJxLYMriWwNpZSLlLPQvrRTWFVo17FovqTNHTAlDNLS1p8h6bwjR0UTe0q7mXoqGsbHW8L0SaSwS7w6ZRRSl5/JhTsUIuWNopvfr2Ru18LjjkjnPbeSopxHZ4lP4raK+b+hrxPs8HddZbR5x7Qa93Wy3yoNr1ln8z+e3wM6C8TS7/YrbCdIucu+y9DdLWeWE4SWF0ISkJyK3I0SAdyIwhKbxFNvslklp6XZJQXNvn2XVnRpV6eHZLm/3pP8AixlKdMRcHufSK8nLf6A2p0FsN3HbvH8yD7vaDf8ALXt3lLD+RbpeLwsfhf5ZPkm8p+jKweSc65F9uisjH3jW2zxndZ5ZQXxrRpJ2RWP1xXL1QFqOLTnD3bS6Jy6tICWs+QSUym3v8/QTkRcgZBZXf4dua6eh6V+zDjaVjok/y3LbPSxcvmtjy3y7P6f19zT4BqpV2xnFvMXGSx+pPJy8kppr8mnHbmkz37VRTMy6pLfma0bFZCFi5WQjNfFJgt8EuZ5PH6fs9o93jrUYN6bfIBvpfVm5qIxW7+CX8TM1bTi2ljDxzzk7lxJIV/swdXUBzSsTi/70Ytwl12WXF91jIZrbufTyMnT2vxOXSEJv5rC+rJrjXwcltGVqLkZ90y+/m/VglhyYclMosYNNl9iB5orGYspmVlk0VkszYkTRFFkUNAiUUXQRGuIbp6smqZSFTBsNhS+wTpqUHV6fI+5ogGipvkjoeF8PfN+QtJpktze4fTndvCjjLffokurB3vwbSHcL0XLY6vSUKKRk8O8PPf6GqpN8vqVMV9nZxp4aEZnnH7S7XJuK7wj8FFy++DvI5PPfb/ae/wCt/wDpE6eCUm3+jPmnJPPJbZDK3hJeSA9Q92wiUjok80lKZCUiuUyuUzQDc9nkszl2UYr45b+yBvaDUuVng6QS282s5+wuAX4lOP6kmvhnP3KeP1tT950kkm+0ksfbA88FfxM6UiqUyMplbedl15IRmdNpr/eVLP70XGXnzTOYkzeqfuq0n+7Ft+vNnNuRd+MLv6LHIj4iGSLZi2Zk/Fv6poO0E0sepm53XqWae45+XyUmfRvsH/baCmT3cFOvPpJ4+jQXq9J5Gd+xyzPD35ai1L5ROv1UF2OJ3ltHdw87l4cZrqE3tn0RgcQk+WyS6HZcWgsPCOH1cZyk0l8XyNlynbV6tMXWrot2zO1s1VHwLGXvJ+fRfA1NZ/ZZfN/q/l/M5zWWORlfNn+zktgEyqaCJIosQpSRzMGsBrAiYPMbM2DzKmWzKmYszY8S6CKoBNQkNFlaDKW0V0mjpsFFInRa0aulbkDQsr6yXo2mEw11MOUvkmNyzRG5pNP5m9Tp/wCzhh/vzb9Wlj7HJ08arXJSfwS/iamh9olhw8Gz5Ny5PvyKhPTaTtOH1pJI1qUjidLx2xfl8MV25vK8tzUq41Z5L4I7vato65bw66NUTzH9p6xP0nH6w/2Oojxez9X2Ryft3F2x95lt+Hf/AC7/AGyLj4qlvfwZc0Upb08/vE7NvgiNrB/edO2xrxv6POZZOZW7CqcytzOjSQmrUOElJPdPKN6rWwujjbdfmg/6+pyzmMptbr5oFWFKsNy7hcG9pSXlsx6dLXXut3+qXT+RjriFq/ffxwyqd07HhtvPJdCvchfCH2X0gzievUvyR5dX38vQzsmlXooKP5t31ecY9DLZnyt7r+ya37E2M2IYwdCFndfMal7oi+vyHoW6+nqZN6B9HfsjxXw2vf8A6lt0/h4vD/pOq1GpRwfA9S9PpqKV/wBuuKf+J/ml9WyOq47JdTzOSqdNo9KOFSk2dNrr4LOWjkeK6qt5w/4IB1XGm9mYmp1mWZ7ZdMt1jTzl5MLWUJboKt1iArdVFgpZz0wCcgecgjUeF8mA2ZXU3m8MWyM2UTROU2UWNj76ZshNlJKRElkMdMnGxlY6Y0ARG192WQkDRZapD0pGjVIu8Rm134Lldk07+C0zVotDqLjDqsD9NZuQmbRR1Ok1uUoy+D7ehpValrz+5ytdoTXqWup2R6lpYzqVHV161f1ghrLlZFx+S8/62OfjrX5E/wAY31+RT9Sim9WHOcUo8Emuz29Ohjzlh/c6Lj8fF+df13RzFstyuy3UebyrGSnIrciKYmjVWjIfJHI+BsA7DB4pt4XNmlp6VWs9er7GfU/C1LsWX3uW3JfcJ5Zny/kpeBazVeLZcvuCk/ALwGNcvZ6wIEZMtcCPg6/LyM3YsKpdu33Nb2V0Xvb4ZX5YP3kvSPT4szFUdz7OaZUVbr80933UeiMb5Oq014Y7V5Oou1zMrU6rLK56jINZM4tPQqyN1oDdcWWyM/UTGjCqFbcB2WDTsB7JlmFUTlaUymQlIr8QGbZZJlE2SbKpsolsiyI7GJJEOiI4wJIdMiicR6Mksl8CpSJKQmykEwkFaezAApE4WBpaeG3XqEERuMWmWQmNmAVGys01aPG4BVw/vStL7B1z8ax/WTmtZS4yZsxuK9VUrF59GaRyZ4ZlyT28owR8lmopcHh/7FJp3OfCY6IE4h7gDpD4EOS7GNgWBxEuwI4GwWKLfJB2j0Wd5bLt1ZDopLS3gvD8tWSWy5J/vP8Akb07QJXJLHYhO8xpujpnJWILdpXO0Ed5VO8WCdF9tpnai0ey8CumUkZVQ05lMpkJzKpSGZNk5TIuRBsjkCdLHIg2NkWQEJiGHABCyMx0ACRNIih8gBNMfxleRhD0sUi2EsFER/GIaYfXaXKwy/E1uW12tjSLVGgpk1YBe9JRsGV2DPeEo2gfjHUxj7Blk1JYayAXab9L+D5lnjF4x7hNeQOUWuaHTDYyISjHsh9iOoOmPkuVcf6ZNxi+n1FoYwbJdXRJ9Piy6LS5JEveC0aRbp6lDzf0LZ3AruKZWiZfbPgLd5H34G5kfGGC7BkrimdwPKwrcwJdF8rCiyZFWFTkIlsaTINjtkRkiyIQgAQhCABDiEACEMxAA+RDCABx8kRAA7kJDCAB22y6OxXEfIDRNyHUirIsjHoSpj+IGTH8QD0J94M7AbxC8QC7BfvRveg3jF4gDQlWklaCeIXiANC3aR98DeMXiEGhHvBvGUeIXiAWlzmRcypyGyAaTcxvEQyNkBEmxskciABxhCABCEIAEIQgEIcYcAGYhCABCEIAEIQgAQhCAB8iyIQDEIQgEIWRxAMYQhAIQhCABCEIAEIQgAWRZEIAEIQgAQw4gAYQhAAhCEAxCEIBCEIQAIcQgA//2Q=="
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAk1BMVEWr/iyw/y2x/y2L2ClIiyJ2vyZjqCUAQh2j9Su0/y0APh2m+Sya6ioASx4APB1fpCSU4yoARh4AUB5yuiaQ3il9xycAQR1WmiNpsCWe7ys7fSEATR56xCctbyAmaSButiYeYh+F0Sg+gCETWx9UmCNKjSISWh+H1Cg1dyEqbCAAMBw8fiFDhSIAOB0EVB4AKhwAHxzA9zfTAAAKjklEQVR4nO2dabeiyg6GSRCkBAUENuDAoKDYh+bc///rLjMF2ntcZw9Nni9bbV2LflelKpVKUoJAEARBEARBEARBEATxw4DbRoOvfogfC1vo/kr96qf4qYBzZOAE+NXP8VOpRh47SWS+7wHdsBJOXX31g/xM1GU97FoViZcBTijwvOadskf+G3daouqTvhWiLIkqtlpg4bcvjkbzAhAMx7sbi6d1YBqf9ozfF9hI8qIodK0ebf65HXRgyZViIEjZ0861MmekH8guY9qZlmcB1wjAFCm62Vh6LW4nk5GVb1V36RqIwFJx/KPMqH75+U/77cCgNldgdrRTmT44LGtk1ipsZj08aqMfQV7KCWs2/nSOQBq3irHDxhhGGe6FYy50U6I5/hGrTFu9ZDT/gaR3Aw78Yt+PJzyaEuve+NFomoPcuiA4/0osXsx9/VUubHgTDfIFYi9Zu44MqMGvmOUJEy7XT3jCbw2LuBlM9fuXXNRl9JUatEx3ya6mM/vFF6Rk0GDwjwEH+YzoTiWAw271v3D26pVKmEr7CkXPMmpFUPNkp1s4WBY/mOEABXH2plsCh1Mz+6nRzip+n8pXmJ6tfLM3atVAjNhzv587GNSjC88OE1f7IkeQFww2+2jfRE1Ncu+eRdlU5mvfmOBvftl7BX+XYy76pdfxA5ZR8OV5QDTLcaZUq66igaYK9XAzoFqHWbIg030BiE3l8RBj6YlW1xcBcXV9IBOot5TUewWgXFJhMgCBOasDWe7rwPBJVwdfGQCd4vQHkybuAcEzM8sQsAR8J12lGhnuWwA05Gy9P0dbM0pigcR7M1COPEkvLff+dIh4FSDJJN37Ifk+BMn3IVCSadFo0a7iW7HlxH7zj65/ZVQGnHzxVtLslr75R/nhrzR4eDvs4LF3/Oyr/6dfTqtBt3SQJG+g3HE4B0crN721fIBKfDjYpODrQGed6bIbbC2o5EPnfE5k/Z8lnaW9BkyOSrlPK8dcslUOshCc/PqtkGek34uAt+viemgvZb1wurfMpXjpi/jmMMeB8ft3PEjGIpHmv+fB0Tk4yikfYtYuNPyeRyt4veAw2vNidqXh9xyQcFUcgGDpfIKLINLq8TxPw0s8BOui2BYe99HWv/8JEbd/4cAtrkGuVZs2RV93eUPlstylYEEsEC146xJrV32GLe5C1uw6UNz39qv+2+QKCfCbZsEOOOSs2pz50VD/Zwes2/Oia3VaYb60WZXtEiYkXw/uTlc7TouojzU1a0gbMtCGnEj7cswOtqhvv+ZBvynopHkSq2tu2a1LYbqIS/8xCzRbzxfWpz/h96aO7k0Khh6edRgFo5DeI5i8m3p1D+RDN6VclxF1hBghCdpFFbCDHWTWv2mHHOb/CEhB5RYUbEcKPT1/agr/0LCS7LI3l0tzfwlu0a1+vVwXxzS0oRqeaC13uhdKjq3OfQ8C/s7cubJnHexqfWBGYh7lWFPrDI1ynTW3TiVp6auoWuztlguxikGDfbA82c3XR2PWQxDsVYy9JaIRBY4wpLSg/aSp6z6trzLwOCuuTOjsHe31dLGZFysuaw/SS+0Sd6BTp+meQ26pANSOGfdWWCrCbAHJHWYvtRhnFKCzrYsRIJBHSy2TlkORVhWS+Y8f8vtS1+K2qGY8LpWMu40FBONDIjA2Q9zFvy/Smg147nWAszPR6KlvHwTFuBILDK6mdzlf+SDsXqHuTmRYcWWU6mYc5kPr1K8n3nyNd9jL+uuxCphb3AcgTkyURb3Vz1i9HswnDohxHi8Xp+m/z3jKu0dZj9XA3eRI0p+csbGb/Z8/1I+hbxjUM5FTwGDSP8NJyWo7uBW4QZy2dQB52kdtSfJ1KOOZ7kGcanLgWyp+IuttgfjXeKq7E+teULWwaPg1gOxNqsTtaeAU3HHGLZxdmvxaMLc1c6yOOf3KetTCFBNZINelBc8KyjqvBnjJaDbEcJybZhQIJo2+hkoJGEWeMH3iAwjlJvfGy4mBDVhQS92WPZbb3ybytKpUA60QuK5AaG+UJm+NXWoPxwiYgNlfWb7xDvwqt0A163OMhccAFdMG9dKZM7NMH/yVxoA59YQHSbmFKyfMr3zmb4RWpZ1h1sixO7u5WfkxkJyrGmhQjjuhGpDbzL1FtcHWPeggedRPaI4YlZsCYbNxQz8W20aH9j4pnZqnNrkZbKfpytSMVnBJvobGy+s3akMkvjTbrc61Amv/1G05awsmSvx6HPnT7upVRcftVkjT83AI615CIi0dLbU+ajEJWomXk+J4QrqfdOYD/e+s+fsgW14l1I43A+uqIv+fsz3yqXUy23tUvvcyuOvrkB5pXBZcUP4+eEWU7stxaFCq7fVRfh9aT3z70jkfD/0BiPsQCjpPrYvSx6nALzx2/02iA+QugIeHbe+jhH3rcDj2SQijBrtEDes6/IM9dFDHdLBojLoVAy9U3THF7oQCLnSKW+6uE7W7tgis6Zn67GHnNgJQ2uugjb1ZDU5KqVpn0+aM86oeweQuHsq2gzSYLxbBMM/BqpPvShdMcADzom6Q+VxrYe3shFwRJeZdc2aUb5Sd0eFbUd4vsMM1HeUSYR9kfzj24By+0hGUKd7XYOvG4BMPWwo86UySmRX1MYPr4PCBGtLeo4VPpmqjoIjG2W32vOH6io28Bl/OS4UJD4DmlhM4mcdym9ZUVGq7ZVPy4d9oxXie7gjDr/tttps2FBo/WaGz3Reob27qGVy9mmlIkJiCR35DBvIoOgAmbXafZ3z6DelotkPKSnsBGGXKs/NIMIxos/Y8I99E8Dcr/lI7Otu9B8AXuVYZ/I0c4EVBwrt68ZAppIoaeX4l7lMwZIriKJYCa8vbjj4Y2rz4p+MqnX0fe38VCkOfIPT4wYae7sh8Z5dR4hogHDb2zPV7Mni9nFGDDH8Jks7OfOIuRhZfX6msZr2WQMhlRQLol1HO3tpGSUd/M5IoSrgpDyR3zsNvyI9HVMPlqLgUIqlp+X8d3R6L8jJUsT81mnXcFHftFk3LikJWRlJEHjaXflaFvfxyrOjbImv9mXlv46C7hFc1VBwNPbWwqiy0+s5UjJej28cBVaM1aHvetz9NSv860NjETcSltmdo397B/pm3H40L+YF+LDSbat7uxt46VfdeKHSmSW1zA6I7XZgR5d2/9hceg7sV2fSLFjUCg6TgdAFAMRvy0bj7olG7RTHXOgiYcdt95oN+U9DItrLdXIqlOIm5EzlXUOJ8GWbkq9Tx6xZNguFF0ZWifxXoh6f1+nIpzChxRpdiTSoBUYjdYLm9XPZm5mlTW54v5YgS1Krz0iSIMgnW18ZdfxMfLCTEFJAXM19aPwTmdBv0B8DiQoV/78fIqHbo/ZRbYnHem9oPAaaKJlnvOwEpRfB0Gn7vo64whzk3OPwILKm2HODcyHd5BxA3gXh28sh83wxo3SkabB/HSok/A9qm73+omlfS703gdcN3j1xbNP+9HgD3Ms6/yHYq7T5eB+BhOb3VmB1WHlVyvEDdCVyTzQepPyDIq8SuAoIk4p9wJDlfB+HjTv4gHHbLzA2lz36qH4MrS7bw5zhyOfYMx9M/84l+FK+wTDJegiAIgiAIgiAIgiC+P/8HJauMrDXVPoIAAAAASUVORK5CYII="
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div> */}
                      <img
                      className="w-full h-full object-contain"
                      src="https://images.unsplash.com/photo-1573165067541-4cd6d9837902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
                      alt=""
                    />
                      <div aria-hidden="true" className="inset-0" />
                    {/* </div> */}
                  </div>

                  <div className="relative mx-auto max-w-md px-12 py-4 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                    <div className="md:ml-auto md:w-1/2 md:pl-10">
                      <p className="mt-3 text-base font-semibold uppercase tracking-wider text-black-900">
                        Transform your life through decentralized education
                      </p>
                      <p className="mt-3 text-lg text-black-300">
                        Learners around the world are launching new careers,
                        advancing in their fields, and enriching their lives.
                      </p>
                      <div className="mt-8">
                        <div className="inline-flex rounded-md shadow">
                          <Link href="/all-courses">
                            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent bg-orange-400 text-base font-medium rounded-md text-white bg-yellow">
                              Take a Course
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
